import { Week as WeekTpe } from "@/types"
import { Day } from "./Day"

interface WeekProps {
  week: WeekTpe
}

export const Week: React.FC<WeekProps> = ({ week }) => {
  return (
    <div className="grid grid-cols-7">
      {week.map((day, index) => (
        <Day key={index} day={day} />
      ))}
    </div>
  )
}
