'use client'

import { FormEvent } from 'react'

export default function Form({ transformUrlToCode }: { transformUrlToCode: (url: string) => void }) {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.currentTarget as HTMLFormElement
		const url = form.elements.namedItem('url') as HTMLInputElement

		transformUrlToCode(url.value)
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-10">
			<label htmlFor="url">Image url:</label>
			<input id="ur" type="url" placeholder="https://your-screenshot/image.jpg" />
			<button type="submit">Generate</button>
		</form>
	)
}
