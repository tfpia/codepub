import { transform } from "./transform"

type CsvObject = {
  date: string
  value: number
}

export type ParseCsvToObjectResult = CsvObject[]

export function parseCsvToObject(csvContent: string) {
  const lines = csvContent.trim().split("\n")
  const result: ParseCsvToObjectResult = []

  lines.slice(1).forEach((line) => {
    const [date, valueString] = line.split(",")
    result.push({
      date: date.split("T")[0],
      value: Number(valueString),
    })
  })

  return result
}

export const fetchFromGSheet = async (year: string) => {
  const publishedCsvUrl = process.env.PUBLIC_CSV_URL
  if (!publishedCsvUrl) {
    return null
  }
  const parsedUrl = new URL(publishedCsvUrl)
  const fetchedData = await fetch(parsedUrl)
  const csvText = await fetchedData.text()

  const parsedData = parseCsvToObject(csvText)
  return transform(year, parsedData)
}
