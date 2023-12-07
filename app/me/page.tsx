'use client'
import Image from 'next/image'
import Header from '../components/Header'
import { MouseEvent } from 'react'

export default function Page() {
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
			<section className="w-full max-w-5xl mx-auto py-20 px-8 flex flex-col gap-10">
				<h1 className="pr-8 pb-3 text-3xl font-bold text-neutral-100 border-b border-b-neutral-500">My Generations</h1>
				<div className="grid grid-cols-3 gap-12">
					<a className="block w-fit border border-neutral-800 rounded-lg overflow-hidden hover:border-primary">
						<Image
							src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/250571661/original/3cbc9374b50b5669193d5e96275891143a7c96ff/design-admin-panel-ui-web-app-application-saas-ui-ux-mockup-in-figma-xd.png"
							alt="web page"
							width={240}
							height={80}
						/>
					</a>
				</div>
			</section>
		</div>
	)
}
