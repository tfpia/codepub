import { monthEmojis } from "@/utils/utils"

interface MonthHeaderProps {
  currentMonth: Date
}

export const MonthHeader: React.FC<MonthHeaderProps> = ({ currentMonth }) => {
  const monthName = currentMonth.toLocaleString("default", { month: "long" })
  const monthEmoji = monthEmojis[currentMonth.getMonth()]

  return (
    <div className="flex justify-center items-center mb-4">
      <span className="text-xl font-bold">{`${monthEmoji} ${monthName}`}</span>
    </div>
  )
}
