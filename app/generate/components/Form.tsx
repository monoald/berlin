import { FormEvent } from 'react'
import MultiCheck from './MultiCheck'

export default function Form({ transformUrlToCode }: { transformUrlToCode: (url: string) => void }) {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.currentTarget as HTMLFormElement
		const url = form.elements.namedItem('url') as HTMLInputElement

		transformUrlToCode(url.value)
	}

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		event.stopPropagation()
		const file = event.dataTransfer.files[0]
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			// setUrl(reader.result as string)
			// setUrlInput(reader.result as string)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6">
			<button className="w-full py-1 rounded-lg text-[#0a0a0a] bg-primary" type="submit">
				Generate
			</button>

			<section className="flex flex-col gap-4">
				<h2>Image</h2>
				<div
					className="test relative w-full h-32 border-2 border-dashed border-neutral-700 rounded-lg flex justify-center items-center"
					onDrop={!navigator.userAgent.includes('Firefox') ? handleDrop : () => ''}
				>
					<input
						className="absolute inset-0 text-transparent opacity-0 file:w-12 file:h-12"
						type="file"
						accept=".svg, .png, .jpeg, .jpg, .webp, .bmp"
					/>
					<p className="text-sm text-neutral-500">
						<span className="block w-10 h-10 mx-auto bg-[url('/image-icon.svg')] bg-cover" />
						{!navigator.userAgent.includes('Firefox') ? 'Drop or Browse image' : 'Browse image'}
					</p>
				</div>
				<input
					className="py-1 px-4 border border-neutral-600 rounded-lg bg-transparent hover:border-neutral-800 focus-visible:border-neutral-800 focus:border-neutral-800 target:border-neutral-800 placeholder:text-neutral-600"
					id="ur"
					type="url"
					placeholder="url..."
				/>
			</section>
			<hr className="border-neutral-600 my-1" />

			<section className="flex flex-col gap-4">
				<h2>Framework</h2>

				<div className="flex flex-wrap justify-between items-center gap-4">
					<MultiCheck options={['React', 'Astro', 'Angular', 'None']} checked="None" />
				</div>
			</section>
		</form>
	)
}
