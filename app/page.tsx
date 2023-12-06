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
		<>
			<Header />
			<main id="cards" onMouseMove={handleMouseMove} className="w-full max-w-6xl px-8 mx-auto">
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
							No coding needed. Just upload an image, and watch it become a fully functional app. Easy, fast, and
							hassle-free app development for everyone.
						</p>
						<button className="glow w-32 h-10 button">
							<div className="glow-content flex items-center justify-center text-sm">Try For Free</div>
						</button>
					</div>

					<div>
						<Image
							src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/250571661/original/3cbc9374b50b5669193d5e96275891143a7c96ff/design-admin-panel-ui-web-app-application-saas-ui-ux-mockup-in-figma-xd.png"
							alt="Image"
							width={500}
							height={300}
						/>
					</div>
				</section>

				<section className="text-center">
					<h2 className="text-3xl font-bold">How it works?</h2>
					<div className="h-fit w-full my-24 flex justify-center gap-6">
						<div className="glow card">
							<div className="glow-content">
								<div className="card-info-wrapper">
									<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
										<circle cx="16" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
										<path
											d="M2 12.5001L3.75159 10.9675C4.66286 10.1702 6.03628 10.2159 6.89249 11.0721L11.1822 15.3618C11.8694 16.0491 12.9512 16.1428 13.7464 15.5839L14.0446 15.3744C15.1888 14.5702 16.7369 14.6634 17.7765 15.599L21 18.5001"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
									<p>Give the image to Berlin</p>
								</div>
							</div>
						</div>
						<div className="glow card">
							<div className="glow-content">
								<div className="card-info-wrapper">
									<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M8.56316 5.73646L9.05704 6.3009L9.05704 6.3009L8.56316 5.73646ZM9.87187 5.78004L10.4022 5.24971L10.4022 5.24971L9.87187 5.78004ZM11.6593 7.56743L11.1289 8.09776L11.1289 8.09776L11.6593 7.56743ZM12.7277 7.65997L13.1589 8.27359L13.1589 8.27359L12.7277 7.65997ZM12.8519 7.57265L12.4207 6.95903L12.4207 6.95903L12.8519 7.57265ZM14.4069 7.66623L13.9051 8.2237L13.9051 8.2237L14.4069 7.66623ZM15.2483 9.43253C15.5562 9.70962 16.0304 9.68466 16.3075 9.37678C16.5846 9.0689 16.5596 8.59468 16.2517 8.31759L15.2483 9.43253ZM19.2046 15.1099L18.7525 14.5115L18.7525 14.5115L19.2046 15.1099ZM17.3974 16.4751L16.9454 15.8767L16.9454 15.8767L17.3974 16.4751ZM14.7791 14.9426L14.3949 15.5867L14.3949 15.5867L14.7791 14.9426ZM15.2285 15.3098L14.6684 15.8085L14.6684 15.8085L15.2285 15.3098ZM15.0206 17.6366L14.9024 16.8959L14.9024 16.8959L15.0206 17.6366ZM14.5668 17.6958L14.4902 16.9497L14.4902 16.9498L14.5668 17.6958ZM18.0975 20.2532L18.4235 20.9286L18.4235 20.9286L18.0975 20.2532ZM20.2199 18.9126L20.7296 19.4628L20.7296 19.4628L20.2199 18.9126ZM21.8109 16.8374L21.1746 16.4404L21.1746 16.4404L21.8109 16.8374ZM15.1028 17.4442L15.5959 18.0092L15.5959 18.0092L15.1028 17.4442ZM21.4245 15.1097L21.8765 14.5112L21.8765 14.5112L21.4245 15.1097ZM15.6069 20.9804L15.4871 20.2401L15.4871 20.2401L15.6069 20.9804ZM10.2763 20.863L10.4277 20.1285L10.4277 20.1285L10.2763 20.863ZM12 9.58333C10.9967 9.58333 10.3197 9.58174 9.81395 9.51375C9.3298 9.44865 9.11638 9.33533 8.97386 9.19281L7.9132 10.2535C8.38087 10.7211 8.96359 10.9129 9.61408 11.0004C10.243 11.0849 11.0391 11.0833 12 11.0833V9.58333ZM7.08333 6.16667C7.08333 7.12756 7.08174 7.92367 7.1663 8.55259C7.25375 9.20307 7.44552 9.7858 7.9132 10.2535L8.97386 9.19281C8.83134 9.05029 8.71801 8.83687 8.65292 8.35271C8.58493 7.84698 8.58333 7.16996 8.58333 6.16667H7.08333ZM15.4167 6.16667C15.4167 7.16996 15.4151 7.84698 15.3471 8.35271C15.282 8.83687 15.1687 9.05029 15.0261 9.19281L16.0868 10.2535C16.5545 9.7858 16.7462 9.20307 16.8337 8.55259C16.9183 7.92367 16.9167 7.12756 16.9167 6.16667H15.4167ZM12 11.0833C12.9609 11.0833 13.757 11.0849 14.3859 11.0004C15.0364 10.9129 15.6191 10.7211 16.0868 10.2535L15.0261 9.19281C14.8836 9.33533 14.6702 9.44865 14.186 9.51375C13.6803 9.58174 13.0033 9.58333 12 9.58333V11.0833ZM12 2.75C13.0033 2.75 13.6803 2.75159 14.186 2.81959C14.6702 2.88468 14.8836 2.998 15.0261 3.14052L16.0868 2.07986C15.6191 1.61219 15.0364 1.42042 14.3859 1.33296C13.757 1.24841 12.9609 1.25 12 1.25V2.75ZM16.9167 6.16667C16.9167 5.20578 16.9183 4.40966 16.8337 3.78075C16.7462 3.13026 16.5545 2.54754 16.0868 2.07986L15.0261 3.14052C15.1687 3.28304 15.282 3.49647 15.3471 3.98062C15.4151 4.48635 15.4167 5.16337 15.4167 6.16667H16.9167ZM12 1.25C11.0391 1.25 10.243 1.24841 9.61408 1.33296C8.96359 1.42042 8.38087 1.61219 7.9132 2.07986L8.97386 3.14052C9.11638 2.998 9.3298 2.88468 9.81395 2.81959C10.3197 2.75159 10.9967 2.75 12 2.75V1.25ZM8.58333 6.16667C8.58333 5.16337 8.58493 4.48635 8.65292 3.98062C8.71801 3.49647 8.83134 3.28304 8.97386 3.14052L7.9132 2.07986C7.44552 2.54754 7.25375 3.13026 7.1663 3.78075C7.08174 4.40966 7.08333 5.20578 7.08333 6.16667H8.58333ZM13.75 4.5C13.75 4.54602 13.7127 4.58333 13.6667 4.58333V6.08333C14.5411 6.08333 15.25 5.37445 15.25 4.5H13.75ZM13.6667 4.58333C13.6206 4.58333 13.5833 4.54602 13.5833 4.5H12.0833C12.0833 5.37445 12.7922 6.08333 13.6667 6.08333V4.58333ZM13.5833 4.5C13.5833 4.45398 13.6206 4.41667 13.6667 4.41667V2.91667C12.7922 2.91667 12.0833 3.62555 12.0833 4.5H13.5833ZM13.6667 4.41667C13.7127 4.41667 13.75 4.45398 13.75 4.5H15.25C15.25 3.62555 14.5411 2.91667 13.6667 2.91667V4.41667ZM8.32721 6.93949L9.05704 6.3009L8.06929 5.17203L7.33946 5.81062L8.32721 6.93949ZM9.34154 6.31037L11.1289 8.09776L12.1896 7.0371L10.4022 5.24971L9.34154 6.31037ZM13.1589 8.27359L13.2832 8.18627L12.4207 6.95903L12.2964 7.04635L13.1589 8.27359ZM13.9051 8.2237L15.2483 9.43253L16.2517 8.31759L14.9086 7.10876L13.9051 8.2237ZM13.2832 8.18627C13.4739 8.05224 13.7319 8.06777 13.9051 8.2237L14.9086 7.10876C14.2156 6.48504 13.1835 6.42293 12.4207 6.95903L13.2832 8.18627ZM11.1289 8.09776C11.673 8.64182 12.5294 8.716 13.1589 8.27359L12.2964 7.04635C12.2633 7.06964 12.2182 7.06573 12.1896 7.0371L11.1289 8.09776ZM9.05704 6.3009C9.13958 6.22867 9.26398 6.23282 9.34154 6.31037L10.4022 5.24971C9.76625 4.61376 8.74613 4.57979 8.06928 5.17203L9.05704 6.3009ZM5 21.305H7.25993V19.805H5V21.305ZM18.7525 14.5115L16.9454 15.8767L17.8495 17.0735L19.6567 15.7084L18.7525 14.5115ZM14.3949 15.5867C14.5048 15.6523 14.5951 15.7262 14.6684 15.8085L15.7887 14.8111C15.603 14.6025 15.3903 14.4338 15.1632 14.2984L14.3949 15.5867ZM14.9024 16.8959C14.8034 16.9117 14.6991 16.9262 14.59 16.9388L14.7627 18.4289C14.8932 18.4138 15.0186 18.3964 15.1387 18.3772L14.9024 16.8959ZM14.59 16.9388C14.5572 16.9426 14.5239 16.9463 14.4902 16.9497L14.6434 18.4419C14.6836 18.4378 14.7234 18.4334 14.7627 18.4289L14.59 16.9388ZM14.4902 16.9498C14.0126 16.9988 13.4497 17.0119 12.8223 16.9526L12.6813 18.446C13.4126 18.515 14.0743 18.5003 14.6434 18.4419L14.4902 16.9498ZM18.4235 20.9286C19.1329 20.5862 20.0706 20.0731 20.7296 19.4628L19.7103 18.3623C19.2232 18.8134 18.4549 19.2479 17.7715 19.5778L18.4235 20.9286ZM20.7296 19.4628C21.3814 18.8591 22.0219 17.9161 22.4472 17.2344L21.1746 16.4404C20.754 17.1145 20.2028 17.9062 19.7103 18.3623L20.7296 19.4628ZM14.6096 16.8791C14.5691 16.9145 14.5384 16.9357 14.5184 16.9472C14.4982 16.9588 14.4989 16.9549 14.5192 16.9505L14.8335 18.4172C15.1566 18.348 15.4154 18.1668 15.5959 18.0092L14.6096 16.8791ZM14.5192 16.9505C14.5301 16.9482 14.5463 16.9458 14.5668 16.9458V18.4458C14.6603 18.4458 14.7497 18.4352 14.8335 18.4172L14.5192 16.9505ZM14.6684 15.8085C14.9576 16.1333 14.929 16.6003 14.6096 16.8791L15.5959 18.0092C16.5629 17.1653 16.6157 15.74 15.7887 14.8111L14.6684 15.8085ZM15.1632 14.2984C13.5471 13.3345 11.5497 13.2533 9.68391 13.6148C7.8086 13.9781 5.96451 14.8061 4.56614 15.7978L5.43386 17.0214C6.66491 16.1483 8.31168 15.4086 9.96921 15.0874C11.6362 14.7645 13.2137 14.8822 14.3949 15.5867L15.1632 14.2984ZM16.9454 15.8767C16.266 16.3898 15.6238 16.7809 14.9024 16.8959L15.1387 18.3772C16.2401 18.2015 17.1281 17.6185 17.8495 17.0735L16.9454 15.8767ZM21.8765 14.5112C20.9718 13.828 19.6571 13.8282 18.7525 14.5115L19.6567 15.7084C20.0263 15.4291 20.6029 15.4291 20.9726 15.7082L21.8765 14.5112ZM20.9726 15.7082C21.284 15.9434 21.3015 16.237 21.1746 16.4404L22.4472 17.2344C23.0457 16.2752 22.7124 15.1424 21.8765 14.5112L20.9726 15.7082ZM15.7268 21.7208C16.6316 21.5743 17.562 21.3444 18.4235 20.9286L17.7715 19.5778C17.0901 19.9066 16.316 20.1059 15.4871 20.2401L15.7268 21.7208ZM10.125 21.5976C11.9534 21.9743 13.8776 22.0201 15.7268 21.7208L15.4871 20.2401C13.8201 20.5099 12.0797 20.4688 10.4277 20.1285L10.125 21.5976ZM7.25993 21.305C8.21955 21.305 9.19058 21.4051 10.125 21.5976L10.4277 20.1285C9.39448 19.9156 8.32204 19.805 7.25993 19.805V21.305ZM4.25 15.6667V20.6667H5.75V15.6667H4.25ZM2.75 20.6667V15.6667H1.25V20.6667H2.75ZM3.5 21.4167C3.08579 21.4167 2.75 21.0809 2.75 20.6667H1.25C1.25 21.9093 2.25736 22.9167 3.5 22.9167V21.4167ZM4.25 20.6667C4.25 21.0809 3.91421 21.4167 3.5 21.4167V22.9167C4.74264 22.9167 5.75 21.9093 5.75 20.6667H4.25ZM3.5 14.9167C3.91421 14.9167 4.25 15.2525 4.25 15.6667H5.75C5.75 14.424 4.74264 13.4167 3.5 13.4167V14.9167ZM3.5 13.4167C2.25736 13.4167 1.25 14.424 1.25 15.6667H2.75C2.75 15.2525 3.08579 14.9167 3.5 14.9167V13.4167Z"
											fill="currentColor"
										/>
									</svg>
									<p>Enjoy your web page!</p>
								</div>
							</div>
						</div>
						<div className="glow card">
							<div className="glow-content">
								<div className="card-info-wrapper">
									<svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M17 7.83008L18.6965 9.3569C20.239 10.7452 21.0103 11.4394 21.0103 12.3301C21.0103 13.2208 20.239 13.915 18.6965 15.3033L17 16.8301"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M13.9868 5L12 12.4149L10.0132 19.8297"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
										<path
											d="M7.00005 7.83008L5.30358 9.3569C3.76102 10.7452 2.98975 11.4394 2.98975 12.3301C2.98975 13.2208 3.76102 13.915 5.30358 15.3033L7.00005 16.8301"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
										/>
									</svg>
									<p>Give the image to Berlin</p>
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

				<section>
					<h2 className="text-3xl text-center font-bold">Frequently Asked Questions</h2>

					<ul className="w-screen max-w-lg my-24 mx-auto flex flex-col gap-6">
						<Faq
							question="How many free credits I have?"
							answer="You will have 10 free credits that will be refreshed each month."
							id="free-credits"
						/>
						<Faq
							question="How many free credits I have?"
							answer="You will have 10 free credits that will be refreshed each month."
							id="free-credits1"
						/>
						<Faq
							question="How many free credits I have?"
							answer="You will have 10 free credits that will be refreshed each month."
							id="free-credits2"
						/>
						<Faq
							question="How many free credits I have?"
							answer="You will have 10 free credits that will be refreshed each month."
							id="free-credits3"
						/>
						<Faq
							question="How many free credits I have?"
							answer="You will have 10 free credits that will be refreshed each month."
							id="free-credits4"
						/>
					</ul>
				</section>
			</main>
		</>
	)
}
