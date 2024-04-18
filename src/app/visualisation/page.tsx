"use client"

import { useEffect, useState } from "react"

// Hint: Always pay attention to the imports 🔎
import {
  CalendarBody,
  CalendarLayout,
  CalendarTitle,
} from "@/components/calendar-layout"
import {
  Calendar,
  ColorIndicator,
  IntroText,
  Title,
} from "@/components/calendar-view"
import { Month as MonthType } from "@/types"

// Hint: Our data fetching journey begins with this import statement 🧳
import { fetchData } from "./fetchData"
import { Month } from "@/components/calendar-view/Month"
import { Loading, Error } from "@/components"

export default function Visualisation() {
  /**
   * Welcome to Visualisation! 🖼️
   * Go on a quest to uncover data's secrets powering a dynamic calendar.
   * Your mission: find where console.log() reveals insights.
   * Remember, a console.log() is your compass in the coding wilderness.
   * Let's dive in!
   */
  const [selectedYear, setSelectedYear] = useState(2023)
  // Hint: you can also use new Date().getFullYear() instead of 2023 to get the current year
  // => const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [data, setData] = useState<MonthType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const handleYearChange = (year: number) => {
    setSelectedYear(year)
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    // Hint: this a crucial step towards painting our financial landscape 🎨
    const handleSuccess = (fetchedData: MonthType[]) => {
      setData(fetchedData)
      setLoading(false)
    }

    const handleError = (error: Error) => {
      console.error("Fetch error:", error)
      setError(error)
    }

    setLoading(true)
    fetchData(selectedYear, signal, handleSuccess, handleError)

    return () => controller.abort()
  }, [selectedYear])

  console.log("Data retrieved", data)
  // Hint: this is the point where the data is loaded before it gets passed into the components 🚚
  return (
    <CalendarLayout>
      <CalendarTitle>
        <Title selectedYear={selectedYear} />
        <IntroText>
          Dive into your financial journey with a visual calendar that
          color-codes each day according to your saving. Light greens show lower
          expenses, darker ones higher saving. Spot financial trends and make
          savvy budget decisions. It's a canvas of your financial
          health—navigate with color!
        </IntroText>
        <ColorIndicator />
      </CalendarTitle>
      <CalendarBody>
        {error && <Error />}
        {loading && !error && <Loading />}
        {!loading && !error && (
          <Calendar>
            {data.map((item, index) => (
              <Month key={index} monthData={item} />
            ))}
          </Calendar>
        )}
      </CalendarBody>
    </CalendarLayout>
  )
}
