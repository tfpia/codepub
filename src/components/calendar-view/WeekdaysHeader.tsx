import { weekdays } from "@/utils/utils"

export const WeekdaysHeader: React.FC = () => {
  return (
    <div className="grid grid-cols-7 gap-1">
      {weekdays.map((day) => (
        <div key={day} className="text-center">
          {day}
        </div>
      ))}
    </div>
  )
}
