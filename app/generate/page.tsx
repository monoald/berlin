'use client'

import { useState } from 'react'
import Form from './components/Form'
import Image from 'next/image'

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

export default function Generate() {
	const [result, setResult] = useState('')
	const [step, setStep] = useState(STEPS.INITIAL)

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

	const transformImageToCode = async (file: File) => {
		const img = await toBase64(file)
		transformToCode(JSON.stringify({ img }))
	}

	const transformUrlToCode = async (url: string) => {
		transformToCode(JSON.stringify({ url }))
	}

	return (
		<div className="grid grid-cols-[282px_1fr]">
			<aside className="relative min-h-screen p-6 flex flex-col items-center gap-5 bg-[#0d0d0d] rounded-lg border border-neutral-800">
				<header className="w-full pb-6 text-center border-b border-b-neutral-600">
					<h1 className="mb-2 text-3xl font-semibold">
						<Image className="mx-auto" src="/berlin.png" alt="logo" width={120} height={80} />
					</h1>
					<h2 className="text-md text-neutral-400">Image to code</h2>
				</header>

				<section className="max-w-5xl w-full mx-auto">
					<Form transformUrlToCode={transformUrlToCode} />
				</section>

				<footer className="absolute bottom-6 text-neutral-500">Built by monoald with 🧡</footer>
			</aside>

			<main className="bg-[#030301]">
				{step === STEPS.LOADING && (
					<div className="flex justify-center items-center">
						<h3>LOADING.....</h3>
					</div>
				)}

				{step === STEPS.PREVIEW && (
					<div className="rounded flex flex-col gap-4">
						<iframe srcDoc={result} className="w-full h-full border-2 rounded border-gray-700 aspect-video" />
						<pre>
							<code>{result}</code>
						</pre>
					</div>
				)}
			</main>
		</div>
	)
}
