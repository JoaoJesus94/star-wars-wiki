import { GenderMale, GenderFemale, Question, IconProps } from 'phosphor-react'
import { RefAttributes } from 'react'

type GenderProps = IconProps & RefAttributes<SVGSVGElement> & { gender: string }

export function Gender({ gender, ...props }: GenderProps) {
	switch (gender) {
		case 'male':
			return <GenderMale {...props} />
		case 'female':
			return <GenderFemale {...props} />
		case 'n/a':
			return <span>n/a</span>
		default:
			return <Question {...props} />
	}
}
