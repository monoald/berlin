import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import Image from 'next/image'

type Props = {
	transformToCode: (data: { img: string }) => void
	setDone: Dispatch<SetStateAction<boolean>>
	setResult: Dispatch<SetStateAction<string>>
}

export default function Form({ transformToCode, setDone, setResult }: Props) {
	const [frameworkChecked, setFrameworkChecked] = useState('None')
	const [image, setImage] = useState<string | null>(null)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.currentTarget as HTMLFormElement
		const url = form.elements.namedItem('url') as HTMLInputElement
		const framework = frameworkChecked

		if (!image && url.value !== '') transformToCode({ img: url.value })

		if (image && url.value === '') transformToCode({ img: image })

		url.value = ''
		setImage(null)
		setDone(false)
		setResult('')
	}

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		event.stopPropagation()
		const file = event.dataTransfer.files[0]
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => {
			setImage(reader.result as string)
		}
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files as FileList
		const file = files[0]

		if (file) {
			// Check if the selected file has an allowed file type
			const allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/webp', 'image/bmp']
			if (allowedTypes.includes(file.type)) {
				const reader = new FileReader()
				reader.onload = (event: Event) => {
					const target = event.target as EventTarget & { result: string }
					setImage(target.result)
				}

				reader.readAsDataURL(file)
			}
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6">
			<button className="w-full py-1 rounded-lg text-[#0a0a0a] bg-primary" type="submit">
				Generate
			</button>

			<section className="flex flex-col gap-4">
				<h2>Image</h2>
				{!image ? (
					<div
						className="test relative w-full h-32 border-2 border-dashed border-neutral-700 rounded-lg flex justify-center items-center"
						onDrop={handleDrop}
					>
						<input
							onChange={handleFileChange}
							className="absolute inset-0 text-transparent opacity-0 file:w-12 file:h-12"
							name="image-file"
							type="file"
							accept=".svg, .png, .jpeg, .jpg, .webp, .bmp"
						/>
						<p className="text-sm text-neutral-500">
							<span className="block w-10 h-10 mx-auto bg-[url('/image-icon.svg')] bg-cover" />
							Drop or Browse image
						</p>
					</div>
				) : (
					<Image src={image} alt="Web to generate" className="w-full h-32 rounded-lg" width={300} height={200} />
				)}

				<input
					className="py-1 px-4 border border-neutral-600 rounded-lg bg-transparent hover:border-neutral-800 focus-visible:border-neutral-800 focus:border-neutral-800 target:border-neutral-800 placeholder:text-neutral-600"
					id="ur"
					type="url"
					name="url"
					placeholder="url..."
				/>
			</section>
			<hr className="border-neutral-600 my-1" />

			{/* <section className="flex flex-col gap-4">
				<h2>Framework</h2>

				<div className="flex flex-wrap justify-between items-center gap-4">
					<MultiCheck
						options={['React', 'Astro', 'Angular', 'None']}
						elementChecked={frameworkChecked}
						setElementChecked={setFrameworkChecked}
					/>
				</div>
			</section> */}
		</form>
	)
}
