import { useState } from 'react'

type Props = {
	options: string[]
	checked: string
}

export default function MultiCheck({ options, checked }: Props) {
	const [elementChecked, setElementChecked] = useState(checked)
	const handleCheck = (id: string) => {
		setElementChecked(id)
	}

	return (
		<>
			{options.map((option) => (
				<label key={option} onClick={() => handleCheck(option)} className="w-[108px]" htmlFor={option}>
					<input className="hidden" type="checkbox" name={option} id={option} checked={elementChecked === option} />
					<div className="filter w-full h-full py-[6px] border rounded-lg border-neutral-600 bg-[rgba(255,255,255,0.05)] text-sm text-center hover:border-primary hover:bg-[rgba(254,111,22,0.05)]">
						{option}
					</div>
				</label>
			))}
		</>
	)
}
