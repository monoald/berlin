'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
	const [firstRender, setFirstRender] = useState(true)
	const [token, setToken] = useState('')
	const router = useRouter()

	useEffect(() => {
		if (firstRender) {
			setFirstRender(false)
		} else {
			if (typeof window !== 'undefined') {
				setToken(window.localStorage.getItem('token') as string)
			}
		}
	}, [firstRender])

	const handleLogout = () => {
		window.localStorage.removeItem('token')
		setToken('')
		router.push('/')
	}

	return (
		<header className="fixed bottom-6 w-full h-fit z-10">
			<nav className="glow header max-w-fit h-[70px] mx-auto">
				<ul className="glow-content flex justify-around items-center px-4 gap-12">
					<li>
						<a className="flex flex-col justify-evenly items-center w-24 text-neutral-400 hover:text-white" href="/">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M4 10.9075C4 10.3308 4.24896 9.78216 4.68299 9.40238L10.683 4.15238C11.437 3.49259 12.563 3.49259 13.317 4.15238L19.317 9.40238C19.751 9.78216 20 10.3308 20 10.9075V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16C14 14.8954 13.1046 14 12 14V14C10.8954 14 10 14.8954 10 16V18C10 19.1046 9.10457 20 8 20H6C4.89543 20 4 19.1046 4 18V10.9075Z"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinejoin="round"
								/>
							</svg>
							Home
						</a>
					</li>
					<li>
						<a
							className="flex flex-col justify-evenly items-center w-24 text-neutral-400 hover:text-white"
							href="/playground"
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6.43949 3.83408C6.70916 2.72197 8.29084 2.72197 8.56051 3.83408L9.30252 6.89413C9.3988 7.29118 9.70882 7.6012 10.1059 7.69748L13.1659 8.43949C14.278 8.70916 14.278 10.2908 13.1659 10.5605L10.1059 11.3025C9.70882 11.3988 9.3988 11.7088 9.30252 12.1059L8.56051 15.1659C8.29084 16.278 6.70916 16.278 6.43949 15.1659L5.69748 12.1059C5.6012 11.7088 5.29118 11.3988 4.89413 11.3025L1.83408 10.5605C0.721973 10.2908 0.721972 8.70916 1.83408 8.43949L4.89413 7.69748C5.29118 7.6012 5.6012 7.29118 5.69748 6.89413L6.43949 3.83408Z"
									fill="currentColor"
								/>
								<path
									d="M15.3474 14.5133C15.5133 13.8289 16.4867 13.8289 16.6526 14.5133L17.1092 16.3964C17.1685 16.6407 17.3593 16.8315 17.6036 16.8908L19.4867 17.3474C20.1711 17.5133 20.1711 18.4867 19.4867 18.6526L17.6036 19.1092C17.3593 19.1685 17.1685 19.3593 17.1092 19.6036L16.6526 21.4867C16.4867 22.1711 15.5133 22.1711 15.3474 21.4867L14.8908 19.6036C14.8315 19.3593 14.6407 19.1685 14.3964 19.1092L12.5133 18.6526C11.8289 18.4867 11.8289 17.5133 12.5133 17.3474L14.3964 16.8908C14.6407 16.8315 14.8315 16.6407 14.8908 16.3964L15.3474 14.5133Z"
									fill="currentColor"
								/>
								<path
									d="M18.5717 3.71184C18.6806 3.26272 19.3194 3.26272 19.4283 3.71184L19.7279 4.94763C19.7668 5.10798 19.892 5.23318 20.0524 5.27206L21.2882 5.57172C21.7373 5.68062 21.7373 6.31938 21.2882 6.42828L20.0524 6.72794C19.892 6.76682 19.7668 6.89202 19.7279 7.05237L19.4283 8.28816C19.3194 8.73728 18.6806 8.73728 18.5717 8.28816L18.2721 7.05237C18.2332 6.89202 18.108 6.76682 17.9476 6.72794L16.7118 6.42828C16.2627 6.31938 16.2627 5.68062 16.7118 5.57172L17.9476 5.27206C18.108 5.23318 18.2332 5.10798 18.2721 4.94763L18.5717 3.71184Z"
									fill="currentColor"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M19 3.93109L18.7554 4.93972C18.6577 5.34288 18.3429 5.65766 17.9397 5.75542L16.9311 6L17.9397 6.24458C18.3429 6.34234 18.6577 6.65712 18.7554 7.06029L19 8.06891L19.2446 7.06029C19.3423 6.65712 19.6571 6.34234 20.0603 6.24458L21.0689 6L20.0603 5.75542C19.6571 5.65766 19.3423 5.34288 19.2446 4.93972L19 3.93109ZM19.4895 3.38496C19.365 2.87168 18.635 2.87168 18.5105 3.38496L18.1681 4.79729C18.1236 4.98055 17.9805 5.12363 17.7973 5.16807L16.385 5.51054C15.8717 5.635 15.8717 6.365 16.385 6.48947L17.7973 6.83193C17.9805 6.87637 18.1236 7.01945 18.1681 7.20271L18.5105 8.61504C18.635 9.12832 19.365 9.12832 19.4895 8.61504L19.8319 7.20271C19.8764 7.01945 20.0195 6.87637 20.2027 6.83193L21.615 6.48947C22.1283 6.365 22.1283 5.635 21.615 5.51054L20.2027 5.16807C20.0195 5.12363 19.8764 4.98055 19.8319 4.79729L19.4895 3.38496Z"
									fill="currentColor"
								/>
								<path
									d="M7 23C6.44772 23 6 22.5523 6 22C6 21.4477 6.44772 21 7 21C7.55228 21 8 21.4477 8 22C8 22.5523 7.55228 23 7 23Z"
									fill="currentColor"
								/>
								<path
									d="M2 19C1.44772 19 1 18.5523 1 18C1 17.4477 1.44772 17 2 17C2.55228 17 3 17.4477 3 18C3 18.5523 2.55228 19 2 19Z"
									fill="currentColor"
								/>
								<path
									d="M13 3C12.4477 3 12 2.55228 12 2C12 1.44772 12.4477 1 13 1C13.5523 1 14 1.44772 14 2C14 2.55228 13.5523 3 13 3Z"
									fill="currentColor"
								/>
								<path
									d="M22 14C21.4477 14 21 13.5523 21 13C21 12.4477 21.4477 12 22 12C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14Z"
									fill="currentColor"
								/>
							</svg>
							Playground
						</a>
					</li>
					<li>
						{token !== '' && token !== null ? (
							<button
								onClick={handleLogout}
								className="flex flex-col justify-evenly items-center w-24 text-neutral-400 hover:text-white"
							>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M20 18C20 19.6569 16.4183 21 12 21C7.58172 21 4 19.6569 4 18C4 16.3431 7.58172 15 12 15C16.4183 15 20 16.3431 20 18Z"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
									<path
										d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
								</svg>
								Logout
							</button>
						) : (
							<Link
								href="/login"
								className="flex flex-col justify-evenly items-center w-24 text-neutral-400 hover:text-white"
							>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M20 18C20 19.6569 16.4183 21 12 21C7.58172 21 4 19.6569 4 18C4 16.3431 7.58172 15 12 15C16.4183 15 20 16.3431 20 18Z"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
									<path
										d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
										stroke="currentColor"
										strokeWidth="1.5"
									/>
								</svg>
								Login
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</header>
	)
}
