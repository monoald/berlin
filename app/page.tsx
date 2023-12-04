'use client'

import { useState } from 'react'
import Form from './components/Form'

const STEPS = {
	INITIAL: 'INITIAL',
	LOADING: 'LOADING',
	PREVIEW: 'PREVIEW',
	ERROR: 'ERROR',
}

const toBase64 = (file: File) => {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result as string)
		reader.onerror = (error) => reject(error)
	})
}

async function* streamReader(res: Response) {
	const reader = res.body?.getReader()
	const decoder = new TextDecoder()

	if (!reader) return

	while (true) {
		const { done, value } = await reader.read()
		const chunk = decoder.decode(value)
		yield chunk
		if (done) break
	}
}

export default function Home() {
	const [result, setResult] = useState('')
	const [step, setStep] = useState(STEPS.INITIAL)

	const transformImageToCode = async (file: File) => {
		const img = await toBase64(file)
		transformToCode(JSON.stringify({ img }))
	}

	const transformToCode = async (body: string) => {
		setStep(STEPS.LOADING)
		const res = await fetch('api/generate-code-from-image', {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!res.ok || res.body == null) {
			setStep(STEPS.ERROR)
			throw new Error('Error while generating the code.')
		}

		setStep(STEPS.PREVIEW)

		for await (const chunk of streamReader(res)) {
			setResult((prev) => prev + chunk)
		}
	}

	const transformUrlToCode = async (url: string) => {
		transformToCode(JSON.stringify({ url }))
	}

	return (
		<div className="grid grid-cols-[400px_1fr]">
			<aside className="flex flex-col justify-between min-h-screen p-4 bg-gray-900">
				<header>
					<h1 className="text-3xl font-semibold">Berlin</h1>
					<h2 className="text-sm opacity-75">Image to code in seconds</h2>
				</header>

				<section>Filters...</section>
				<footer>Built by monoald with</footer>
			</aside>

			<main className="bg-gray-950">
				<section className="max-w-5xl w-full mx-auto p-10">
					{step === STEPS.LOADING && (
						<div className="flex justify-center items-center">
							<h3>LOADING.....</h3>
						</div>
					)}

					{step === STEPS.INITIAL && <Form transformUrlToCode={transformUrlToCode} />}

					{step === STEPS.PREVIEW && (
						<div className="rounded flex flex-col gap-4">
							<iframe srcDoc={result} className="w-full h-full border-2 rounded border-gray-700 aspect-video" />
							<pre>
								<code>{result}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	)
}
