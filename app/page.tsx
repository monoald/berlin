'use client'
import Image from 'next/image'
import Header from './components/Header'
import { MouseEvent } from 'react'
import Faq from './components/Faq'

export default function Home() {
	const handleMouseMove = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
		const cards = document.getElementsByClassName('glow') as HTMLCollectionOf<HTMLElement>

		for (const card of cards) {
			const rect = card.getBoundingClientRect()
			const x = e.clientX - rect.left
			const y = e.clientY - rect.top

			card.style.setProperty('--mouse-x', `${x}px`)
			card.style.setProperty('--mouse-y', `${y}px`)
		}
	}

	return (
		<div id="cards" onMouseMove={handleMouseMove}>
			<Header />
			<main className="w-full max-w-6xl px-8 mx-auto">
				<Image
					className="absolute top-10 right-2/4 translate-x-2/4 mx-auto"
					src="/berlin.png"
					alt="Berlin Logo"
					width={200}
					height={80}
				/>
				<section className="relative w-full max-w-fit h-screen flex justify-between items-center gap-24">
					<span className="absolute top-1/4 left-0 z-[-2] will-change-transform shadow-[0_0px_120px_105px_#fe6f16]" />
					<span className="absolute top-3/4 right-0 z-[-2] will-change-transform shadow-[0_0px_120px_105px_#fe6f16]" />
					<div className="flex flex-col gap-10">
						<h1 className="w-auto text-6xl font-bold">Build your dream app with just an image!</h1>
						<p className="text-lg text-neutral-500">
							No coding needed. Just upload an image, and watch it become a fully web app. Easy, fast, and hassle-free
							app development for everyone.
						</p>
						<a href="/playground" className="glow w-32 h-10 button">
							<div className="glow-content flex items-center justify-center text-sm">Try For Free</div>
						</a>
					</div>

					<div>
						<Image src="/hero.webp" alt="Image" width={700} height={300} />
					</div>
				</section>

				<section className="text-center">
					<h2 className="text-3xl font-bold">How it works?</h2>
					<div className="h-fit w-full my-24 flex justify-center gap-6">
						<div className="glow card">
							<div className="glow-content">
								<div className="card-info-wrapper">
									<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_672_81)">
											<path
												d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H17.5L13.96 12.29Z"
												fill="currentCOlor"
											/>
										</g>
										<defs>
											<clipPath id="clip0_672_81">
												<rect width="80" height="80" fill="white" />
											</clipPath>
										</defs>
									</svg>
									<p>Get the image of your web page</p>
								</div>
							</div>
						</div>
						<div className="glow card">
							<div className="glow-content">
								<div className="card-info-wrapper">
									<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_672_84)">
											<path
												d="M21 15H23V17H21V15ZM21 11H23V13H21V11ZM23 19H21V21C22 21 23 20 23 19ZM13 3H15V5H13V3ZM21 7H23V9H21V7ZM21 3V5H23C23 4 22 3 21 3ZM1 7H3V9H1V7ZM17 3H19V5H17V3ZM17 19H19V21H17V19ZM3 3C2 3 1 4 1 5H3V3ZM9 3H11V5H9V3ZM5 3H7V5H5V3ZM1 11V19C1 20.1 1.9 21 3 21H15V11H1ZM3 19L5.5 15.79L7.29 17.94L9.79 14.72L13 19H3Z"
												fill="currentColor"
											/>
										</g>
										<defs>
											<clipPath id="clip0_672_84">
												<rect width="80" height="80" fill="white" />
											</clipPath>
										</defs>
									</svg>
									<p>Give the image to Berlin</p>
								</div>
							</div>
						</div>
						<div className="glow card">
							<div className="glow-content">
								<div className="card-info-wrapper">
									<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_672_107)">
											<path d="M8.41 16.59L3.83 12L8.41 7.41L7 6L1 12L7 18L8.41 16.59Z" fill="currentColor" />
											<path
												d="M10.5555 19.9297L14.3032 4.37477L12.7477 4L9.00006 19.5549L10.5555 19.9297Z"
												fill="currentColor"
											/>
											<path d="M15.59 16.59L20.17 12L15.59 7.41L17 6L23 12L17 18L15.59 16.59Z" fill="currentColor" />
										</g>
										<defs>
											<clipPath id="clip0_672_107">
												<rect width="80" height="80" fill="white" />
											</clipPath>
										</defs>
									</svg>
									<p>Enjoy your web page!</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="h-fit py-32 flex justify-evenly items-center gap-32">
					<div className="w-full max-w-md flex flex-col gap-10">
						<h2 className="text-3xl font-bold">Build Products Faster</h2>
						<p className="text-lg text-neutral-500">
							Save the time you spend creating those boring layouts and focus on what&apos;s important.
						</p>
					</div>
					<figure className="relative before:absolute before:w-1 before:h-1 before:top-3/4 before:left-1/4 before:shadow-[0_0px_80px_65px_#fe6f16] before:z-[-2]">
						<Image src="/rocket.webp" alt="rocket" width={300} height={300} />
					</figure>
				</section>

				<section className="h-fit py-32 flex justify-evenly items-center gap-32">
					<figure className="relative before:absolute before:w-1 before:h-1 before:top-1/4 before:left-2/4 before:shadow-[0_0px_180px_65px_#fe6f16] before:z-[-2]">
						<Image className="rotate-180" src="/light-bulb.webp" alt="rocket" width={250} height={250} />
					</figure>
					<div className="w-full max-w-md flex flex-col gap-10">
						<h2 className="text-3xl font-bold">Don&apos;t Know About Design?</h2>
						<p className="text-lg text-neutral-500">
							Don&apos;t worry! With Berlin&apos;s help, you will build products with an amazing UI.
						</p>
					</div>
				</section>

				<section className="mb-40">
					<h2 className="text-3xl text-center font-bold">Frequently Asked Questions</h2>

					<ul className="w-screen max-w-lg my-24 mx-auto flex flex-col gap-6">
						<Faq
							question="Is Berlin Free?"
							answer="Yes! At the moment Berlin is in its alpha version, so you can use your Free credits."
						/>
						<Faq question="How many free credits do I get?" answer="You will receive 20 free credits each month." />
						<Faq
							question="How many credits does a generation cost?"
							answer="A generation costs 1 credit, so you have 20 free generations per month."
						/>
						<Faq
							question="Is Berlin meant to be a paid service?"
							answer="At the moment, no, Berlin is a personal project."
						/>
						<Faq question="Who made Berlin?" answer="Berlin is a personal project of Monoald." />
					</ul>
				</section>
			</main>
		</div>
	)
}
