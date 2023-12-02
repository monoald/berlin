import Image from 'next/image'
import Form from './components/Form'

export default function Home() {
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
				<section className="max-w-2xl mx-auto p-10">
					<Form />
				</section>
			</main>
		</div>
	)
}
