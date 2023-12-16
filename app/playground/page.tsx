'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Form from './components/Form'
import Image from 'next/image'
import { redirect } from 'next/navigation'

const STEPS = {
	INITIAL: 'INITIAL',
	LOADING: 'LOADING',
	PREVIEW: 'PREVIEW',
	ERROR: 'ERROR',
}

async function* streamReader(res: Response, setDone: Dispatch<SetStateAction<boolean>>) {
	const reader = res.body?.getReader()
	const decoder = new TextDecoder()

	if (!reader) return

	while (true) {
		const { done, value } = await reader.read()
		const chunk = decoder.decode(value)
		yield chunk
		if (done) {
			setDone(true)
			break
		}
	}
}

async function save(image: string, code: string) {
	const res = await fetch('/api/generations', {
		method: 'POST',
		headers: {
			authentication: `Bearer ${window.localStorage.getItem('token')}`,
		},
		body: JSON.stringify({
			image,
			code,
		}),
	})
}

export default function Playground() {
	const [result, setResult] = useState('')
	const [step, setStep] = useState(STEPS.INITIAL)
	const [done, setDone] = useState(false)
	const [img, setImg] = useState('')
	const [user, setUser] = useState<User | undefined | null>()

	useEffect(() => {
		if (done) {
			save(img, result)
		}
	}, [done])

	useEffect(() => {
		async function getUser() {
			try {
				const res = await fetch('/api/users/getUser', {
					headers: {
						authentication: `Bearer ${window.localStorage.getItem('token')}`,
					},
				})

				const data = await res.json()

				if ('error' in data) {
					setUser(null)
					return
				}

				setUser(data)
			} catch (error) {
				setUser(null)
			}
		}
		getUser()
	}, [])

	if (user === null) {
		redirect('login')
	}

	const transformToCode = async (data: { img: string }) => {
		setImg(data.img)
		const body = JSON.stringify(data)
		setStep(STEPS.LOADING)
		const res = await fetch('api/generate-code-from-image', {
			method: 'POST',
			body,
			headers: {
				'Content-Type': 'application/json',
				authentication: `Bearer ${window.localStorage.getItem('token')}`,
			},
		})

		if (!res.ok || res.body == null) {
			setStep(STEPS.ERROR)
			throw new Error('Error while generating the code.')
		}

		setStep(STEPS.PREVIEW)

		for await (const chunk of streamReader(res, setDone)) {
			setResult((prev) => prev + chunk)
		}
	}

	if (user === undefined) {
		return (
			<div className="w-full h-screen grid place-items-center">
				<div className="loader"></div>
			</div>
		)
	}

	return (
		<div className="grid grid-cols-[282px_1fr]">
			<aside className="sticky top-0 min-h-screen max-h-[100vh] p-6 flex flex-col items-center gap-5 bg-[#0d0d0d] rounded-lg border border-neutral-800">
				<header className="w-full pb-6 text-center border-b border-b-neutral-600">
					<h1 className="mb-2 text-3xl font-semibold">
						<Image className="mx-auto" src="/berlin.png" alt="logo" width={120} height={80} />
					</h1>
					<h2 className="text-md text-neutral-400">Image to code</h2>
				</header>

				<section className="max-w-5xl w-full mx-auto">
					<div className="w-full h-fit pb-4 flex justify-center items-center gap-2">
						<p>{user?.credits}</p>
						<Image src="/berlin-coin.webp" alt="Berlin Credits" width={30} height={30} />
					</div>
					<Form transformToCode={transformToCode} setDone={setDone} setResult={setResult} setUser={setUser} />
				</section>

				<footer className="absolute bottom-6 text-neutral-500">Built by monoald with 🧡</footer>
			</aside>

			<main className="bg-[#030301] p-20">
				{step === STEPS.LOADING && (
					<div className="w-full h-screen grid place-items-center">
						<div className="loader"></div>
					</div>
				)}

				{step === STEPS.PREVIEW && (
					<div className="w-full rounded-lg flex flex-col gap-14">
						<iframe srcDoc={result} className="w-full h-fit border-2 rounded border-gray-700 aspect-video" />
						<pre className="border rounded-lg border-neutral-800 p-8 bg-[#0d0d0d]">
							<code>{result}</code>
						</pre>
					</div>
				)}
			</main>
		</div>
	)
}
