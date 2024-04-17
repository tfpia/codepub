import { Day as DayType } from "@/types"
import { getColorForValue } from "@/utils/colorUtils"

interface DayProps {
  day: DayType
}

export const Day: React.FC<DayProps> = ({ day: { date, value } }) => {
  const colorClass = getColorForValue(value)
  const dayText = date?.getDate()
  let title = ""

  if (date) {
    title = `💸 Total Spent: €${value.toFixed(2)}`
  }

  return (
    <div className={`py-2 px-4 text-center border ${colorClass}`} title={title}>
      {dayText}
    </div>
  )
}
