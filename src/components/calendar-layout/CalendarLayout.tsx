export const CalendarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-light flex flex-col text-dark p-8 min-h-screen h-full">
      {children}
    </div>
  )
}
