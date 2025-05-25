import { PiSpinnerLight } from 'react-icons/pi'

const Spinner = ({ classNames }) => {
	return <PiSpinnerLight className={`${classNames} animate-spin`} />
}

export default Spinner
