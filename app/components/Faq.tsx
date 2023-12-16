type Props = {
	question: string
	answer: string
	id: string
}

export default function Faq({ question, answer, id }: Props) {
	return (
		<li className="faq glow w-full p-[1px] h-fit">
			<details name="faq" className="w-full rounded-lg bg-[#0d0d0d] text-start z-[1]">
				<summary className="p-5 flex justify-between list-none">
					{question}
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M19 9L12 16L5 9"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</summary>
				<p className="p-5">{answer}</p>
			</details>
		</li>
	)
}
