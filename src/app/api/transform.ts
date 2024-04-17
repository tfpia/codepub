import { ParseCsvToObjectResult } from "./fetchFromGoogleSheet"

export function transform(year: string, data: ParseCsvToObjectResult) {
  if (!data || !data.length) {
    return []
  }

  const filteredDataByYear = data.filter((item) => item.date.startsWith(year))

  // The aggregation process sums up values for each unique date in the filtered data,
  // producing an array of objects with dates and their respective total values.
  const aggregation: { [key: string]: number } = {}

  filteredDataByYear.forEach(({ date, value }) => {
    if (!aggregation[date]) {
      aggregation[date] = 0
    }
    aggregation[date] += value
  })

  return Object.entries(aggregation).map(([date, value]) => ({
    date,
    value,
  }))
}
