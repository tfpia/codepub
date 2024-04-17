interface CalendarProps {
  children: React.ReactNode
}

export const Calendar: React.FC<CalendarProps> = ({ children }) => {
  return <div className="grid grid-cols-4 gap-4">{children}</div>
}
