type Props = {
	question: string
	answer: string
	id: string
}

export default function Faq({ question, answer, id }: Props) {
	return (
		<li className="w-full p-5 border border-neutral-800 rounded-lg bg-[rgba(255,255,255,0.05)] transition-all">
			<label htmlFor={id} className="flex justify-between text-md font-semibold checked:text-primary">
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
			{/* <p className="flex justify-between text-md font-semibold">
				{question}
				<span>
				</span>
			</p> */}
			<p className="h-0 text-opacity-0 text-neutral-300 transition-all">{answer}</p>
		</li>
	)
}
