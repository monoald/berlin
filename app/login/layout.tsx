export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex flex-col justify-center items-center h-screen p-8">
			<section className="flex w-full max-w-sm md:max-w-3xl h-full max-h-[550px] gap-12">{children}</section>
		</main>
	)
}
