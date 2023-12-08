export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Login to Berlin, the AI app where you can convert images to code."></meta>
				<title>Login</title>
			</head>
			<body>
				<main className="flex flex-col justify-center items-center h-screen p-8">
					<section className="flex w-full max-w-3xl h-full max-h-[550px] gap-12">{children}</section>
				</main>
			</body>
		</html>
	)
}
