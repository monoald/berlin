import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Berlin AI',
	description: 'The Image to Code AI.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="shortcut icon"
					href="https://raw.githubusercontent.com/monoald/berlin/main/app/favicon.ico"
					type="image/x-icon"
				/>
			</head>
			<body
				className={`bg-[#030301] relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:backdrop-blur-3xl after:z-[-1] after:pointer-events-none overflow-x-hidden max-w-full`}
			>
				{children}
			</body>
		</html>
	)
}
