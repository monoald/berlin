export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex flex-col justify-center items-center h-screen p-8">
			<section className="flex w-full max-w-4xl h-full max-h-[600px] ">{children}</section>
		</main>
	)
}
