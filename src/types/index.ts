export type HabitData = Record<string, number>
export type DataMap = Record<string, number>
export type WeekType = { date: Date | null; value: number }[]
export type Day = {
  date: Date | null
  value: number
}
export type Week = Day[]
export type Month = {
  month: number
  weeks: Week[]
  totalValue: number
  averageValue: number
}
