import { useMemo } from "react"

// 🌟 You made it to the right component for Task 1 of Level 2 🌟

interface TitleWithYearPickerProps {
  onYearChange: (year: number) => void
  selectedYear: number
}

export const TitleWithYearPicker: React.FC<TitleWithYearPickerProps> = ({
  onYearChange,
  selectedYear,
}) => {
  const years = useMemo(
    () =>
      Array.from(new Array(4), (_, index) => new Date().getFullYear() - index),
    [],
  )

  return (
    <h1 className="text-4xl font-bold text-green-900 mb-6">
      🎨 Saving Palette 🎨: Coloring Your
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(Number(e.target.value))}
        className="text-4xl text-green-600 px-2 bg-transparent cursor-pointer underline"
      >
        {years.map((yearOption) => (
          <option key={yearOption} value={yearOption}>
            {yearOption}
          </option>
        ))}
      </select>
      Monthly Finances
    </h1>
  )
}
