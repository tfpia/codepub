import { Month as MonthType } from "@/types"

import { MonthHeader } from "./MonthHeader"
import { WeekdaysHeader } from "./WeekdaysHeader"
import { Week } from "./Week"

interface MonthProps {
  monthData: MonthType
}

export const Month: React.FC<MonthProps> = ({ monthData }) => {
  /**
   * Hint: Tailwind classes like bg-white, shadow, and rounded-lg define the backdrop and shadow effects,
   * creating depth and focus. Playing with these can dramatically change the look and feel.
   * If you want to use different background colors, check the colors defined in tailwind.config.js.
   * Give it a try! Change bg-white to bg-purple and see what happens.
   */
  const { month, weeks } = monthData
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <MonthHeader currentMonth={new Date(2020, month)} />
      <WeekdaysHeader />
      {weeks.map((week: any, index: any) => (
        <Week key={index} week={week} />
      ))}
    </div>
  )
}
