// 🌟 You made it to the right component for Task 2 of Level 1 🌟

// You want to see all the nitty gritty details.
// Add more value ranges and use the different "range" colors provided in the tailwind.config.ts to change the colors

export const getColorForValue = (value: number = 0) => {
  if (value === 0) return "bg-gray-100"
  if (value <= 100) return "bg-range-100"
  if (value <= 250) return "bg-range-250"
  if (value <= 350) return "bg-range-350"
  if (value <= 500) return "bg-range-500"
  if (value <= 600) return "bg-range-600"
  if (value <= 750) return "bg-range-750"
  if (value <= 850) return "bg-range-850"
  if (value <= 1000) return "bg-range-1000"
  return "bg-green-600"
}
