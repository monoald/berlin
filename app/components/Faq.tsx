type Props = {
	question: string
	answer: string
	id: string
}

export default function Faq({ question, answer, id }: Props) {
	return (
		<li className="faq glow w-full p-[1px] h-fit">
			<div className="w-full rounded-lg bg-[#0d0d0d] z-[1]">
				<label htmlFor={id} className="w-full p-5 flex justify-between text-md font-semibold checked:text-primary">
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
				</label>
				<input className="hidden" type="checkbox" id={id} />
				<p className="h-0 p-0 px-5 text-opacity-0 text-start text-neutral-300 transition-all">{answer}</p>
			</div>
		</li>
	)
}
