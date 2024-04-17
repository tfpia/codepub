import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

export interface Props {
  isOpen: boolean
  size?: number
  className?: string
}

const RotatingChevron = ({ isOpen, className }: Props) => {
  const classes = `h-4 w-4 mr-1 ${className}`
  return isOpen ? (
    <ChevronDownIcon className={classes} />
  ) : (
    <ChevronRightIcon className={classes} />
  )
}

export default RotatingChevron
