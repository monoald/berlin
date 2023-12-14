'use client'
import Image from 'next/image'

let windowObjectReference: Window | null = null
let previousUrl: string | null = null

export const openPopUp = (url: string, name: string, callback: (e: MessageEvent) => void) => {
	window.removeEventListener('message', callback)

	const left = (screen.width - 400) / 2
	const top = (screen.height - 500) / 2

	const strWindowFeatures = `toolbar=no, menubar=no, location=no, width=400, height=500, top=100, left=${left}, top=${top}`

	if (windowObjectReference === null || windowObjectReference.closed) {
		windowObjectReference = window.open(url, name, strWindowFeatures)
	} else if (previousUrl !== url) {
		windowObjectReference = window.open(url, name, strWindowFeatures)
		windowObjectReference?.focus()
	} else {
		windowObjectReference.focus()
	}

	window.addEventListener('message', (event) => callback(event), false)
	previousUrl = url
}

const messageListener = async (e: MessageEvent) => {
	if ('token' in e.data) {
		window.localStorage.setItem('token', e.data.token)
	}
}

export default function Login() {
	return (
		<>
			<div className="w-2/4 h-full grid place-items-center ">
				<Image src="/astronaut-moon.webp" alt="astronaut" width={240} height={380} />
			</div>
			<div className="flex flex-col justify-center items-center w-2/4 h-full border border-neutral-800 rounded-lg bg-[rgba(255,255,255,0.05)]">
				<div className="flex flex-col justify-center items-center gap-4">
					<figure className="mb-8">
						<Image src="/berlin.png" alt="logo" width={140} height={90} />
					</figure>
					<h2 className="text-3xl font-bold">Welcome Back!</h2>
					<p className="text-sm text-neutral-400">Select your login method</p>
				</div>

				{/* <form className="flex flex-col gap-6 mt-8 mb-8">
					<label className="flex flex-col gap-2 font-semibold" htmlFor="email">
						Email
						<input
							className="bg-transparent border-b border-b-neutral-200 font-normal"
							type="email"
							id="email"
							name="email"
						/>
					</label>

					<label className="flex flex-col gap-2 font-semibold" htmlFor="password">
						Password
						<input
							className="bg-transparent border-b border-b-neutral-200 font-normal"
							type="password"
							id="password"
							name="password"
						/>
					</label>

					<a href="" className="text-xs text-center text-neutral-400 hover:text-primary">
						Forgot password?
					</a>

					<button
					onClick={() => signIn('credentials', {

					})}
						className="w-full py-2 mx-auto rounded-lg bg-primary text-neutral-800 font-semibold tracking-normal"
						type="submit"
					>
						Log In
					</button>
				</form> */}

				<div className="w-full my-12 flex flex-col justify-center gap-4">
					<button
						onClick={() => openPopUp('/api/auth/github', 'Github Login', messageListener)}
						className="w-64 py-[10px] px-8 mx-auto border rounded-lg border-neutral-800 grid grid-cols-[1fr,24px] place-items-start gap-4 bg-[#0D1117]"
					>
						Login with Github
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_220_285)">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M11.9958 0.6C9.16481 0.601469 6.42662 1.60416 4.27087 3.42879C2.11513 5.25341 0.682406 7.78099 0.228891 10.5596C-0.224624 13.3381 0.330635 16.1865 1.7954 18.5953C3.26016 21.0042 5.53889 22.8165 8.22415 23.7081C8.81656 23.818 9.0397 23.4509 9.0397 23.1387C9.0397 22.8265 9.02785 21.9213 9.0239 20.9317C5.7064 21.6484 5.00538 19.5318 5.00538 19.5318C4.46431 18.1574 3.68233 17.7961 3.68233 17.7961C2.60019 17.0617 3.7633 17.0755 3.7633 17.0755C4.96194 17.1599 5.59188 18.2987 5.59188 18.2987C6.65427 20.111 8.38212 19.5868 9.06142 19.2805C9.16805 18.5127 9.47809 17.9905 9.81971 17.694C7.16966 17.3955 4.38532 16.3785 4.38532 11.835C4.3689 10.6567 4.80865 9.51714 5.6136 8.6522C5.49116 8.35375 5.08239 7.14818 5.7301 5.51064C5.7301 5.51064 6.73128 5.19256 9.01009 6.72603C10.9647 6.19455 13.027 6.19455 14.9816 6.72603C17.2584 5.19256 18.2576 5.51064 18.2576 5.51064C18.9073 7.14425 18.4985 8.34982 18.3761 8.6522C19.1836 9.51728 19.6243 10.6588 19.6063 11.8389C19.6063 16.3922 16.8161 17.3955 14.1621 17.6881C14.5886 18.0572 14.9697 18.7778 14.9697 19.8852C14.9697 21.4717 14.9559 22.748 14.9559 23.1387C14.9559 23.4548 15.1711 23.8239 15.7754 23.7081C18.461 22.8164 20.7399 21.0038 22.2047 18.5945C23.6694 16.1852 24.2244 13.3364 23.7703 10.5576C23.3163 7.77879 21.8829 5.25119 19.7264 3.42688C17.57 1.60257 14.8311 0.600538 11.9998 0.6H11.9958Z"
									fill="currentColor"
								/>
								<path
									d="M4.58643 17.6252C4.56076 17.6842 4.46597 17.7018 4.38896 17.6606C4.31195 17.6194 4.25469 17.5428 4.28233 17.4819C4.30998 17.421 4.40279 17.4053 4.4798 17.4466C4.55681 17.4878 4.61605 17.5663 4.58643 17.6252Z"
									fill="currentColor"
								/>
								<path
									d="M5.07027 18.1613C5.02938 18.1818 4.98259 18.1875 4.93792 18.1774C4.89326 18.1674 4.85349 18.1423 4.82541 18.1063C4.7484 18.0238 4.73259 17.9099 4.79183 17.8589C4.85107 17.8078 4.95772 17.8314 5.03473 17.9139C5.11174 17.9963 5.12951 18.1102 5.07027 18.1613Z"
									fill="currentColor"
								/>
								<path
									d="M5.54028 18.8426C5.46722 18.8936 5.3428 18.8426 5.27369 18.7405C5.25458 18.7222 5.23938 18.7002 5.229 18.6759C5.21861 18.6516 5.21326 18.6255 5.21326 18.5991C5.21326 18.5727 5.21861 18.5466 5.229 18.5223C5.23938 18.498 5.25458 18.4761 5.27369 18.4577C5.34675 18.4087 5.47117 18.4577 5.54028 18.5579C5.6094 18.658 5.61137 18.7915 5.54028 18.8426V18.8426Z"
									fill="currentColor"
								/>
								<path
									d="M6.17809 19.5023C6.11292 19.575 5.98062 19.5553 5.87201 19.4572C5.7634 19.359 5.73772 19.2255 5.80289 19.1548C5.86805 19.0841 6.00036 19.1037 6.11292 19.2C6.22548 19.2962 6.2472 19.4316 6.17809 19.5023V19.5023Z"
									fill="currentColor"
								/>
								<path
									d="M7.07258 19.8872C7.04296 19.9794 6.90868 20.0207 6.7744 19.9814C6.64012 19.9421 6.55126 19.8322 6.57693 19.7379C6.6026 19.6437 6.73886 19.6005 6.87511 19.6437C7.01136 19.6869 7.09825 19.7909 7.07258 19.8872Z"
									fill="currentColor"
								/>
								<path
									d="M8.04819 19.9539C8.04819 20.0501 7.93761 20.1326 7.79543 20.1346C7.65325 20.1365 7.53674 20.058 7.53674 19.9618C7.53674 19.8656 7.64732 19.7831 7.7895 19.7811C7.93168 19.7792 8.04819 19.8557 8.04819 19.9539Z"
									fill="currentColor"
								/>
								<path
									d="M8.95652 19.8027C8.9743 19.899 8.87556 19.9991 8.73338 20.0227C8.5912 20.0462 8.4668 19.9893 8.44902 19.895C8.43125 19.8008 8.53394 19.6987 8.67217 19.6732C8.81039 19.6476 8.93875 19.7065 8.95652 19.8027Z"
									fill="currentColor"
								/>
							</g>
							<defs>
								<clipPath id="clip0_220_285">
									<rect width="24" height="24" rx="6" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</button>
					<button
						onClick={() => openPopUp('/api/auth/google', 'Google Login', messageListener)}
						className="w-64 py-[10px] px-8 mx-auto border rounded-lg border-neutral-800 grid grid-cols-[1fr,24px] place-items-start gap-4 bg-neutral-200 text-neutral-900"
					>
						Login with Google
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_220_287)">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M23.52 12.2727C23.52 11.4218 23.4436 10.6036 23.3018 9.8182H12V14.46H18.4582C18.18 15.96 17.3345 17.2309 16.0636 18.0818V21.0927H19.9418C22.2109 19.0037 23.52 15.9273 23.52 12.2727Z"
									fill="#4285F4"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 24C15.24 24 17.9564 22.9254 19.9418 21.0927L16.0636 18.0818C14.9891 18.8018 13.6145 19.2273 12 19.2273C8.87455 19.2273 6.22909 17.1164 5.28546 14.28H1.27637V17.3891C3.25091 21.3109 7.30909 24 12 24Z"
									fill="#34A853"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M5.28545 14.28C5.04545 13.56 4.90909 12.7909 4.90909 12C4.90909 11.2091 5.04545 10.44 5.28545 9.72001V6.61092H1.27636C0.463636 8.23092 0 10.0636 0 12C0 13.9364 0.463636 15.7691 1.27636 17.3891L5.28545 14.28Z"
									fill="#FBBC05"
								/>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 4.77273C13.7618 4.77273 15.3436 5.37818 16.5873 6.56727L20.0291 3.12545C17.9509 1.18909 15.2345 0 12 0C7.30909 0 3.25091 2.68909 1.27637 6.61091L5.28546 9.72C6.22909 6.88364 8.87455 4.77273 12 4.77273Z"
									fill="#EA4335"
								/>
							</g>
							<defs>
								<clipPath id="clip0_220_287">
									<rect width="24" height="24" rx="6" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</button>
				</div>

				{/* <p className="text-xs text-neutral-400">
					Don&apos;t have an account?{' '}
					<a href="" className="hover:text-primary">
						Sign Up
					</a>
				</p> */}
			</div>
		</>
	)
}
