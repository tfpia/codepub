// Import necessary types from a separate file. These types help us ensure that our data is structured correctly:
import { format } from "date-fns"
import { DataMap, HabitData, Month, Week } from "@/types"

// An array (also known as a list) of strings, representing the days of the week.
// Arrays are a way to store multiple values in a single variable.
// These are the days of the week, used later to match dates with days:
export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// Another array, this time of emojis, each representing a month of the year.
// Emojis representing each month (starting with January), adding a fun visual element to your data.
export const monthEmojis = [
  "🥶",
  "❄️",
  "🌬️",
  "🌦️",
  "🌼",
  "☀️",
  "🌞",
  "⛱️",
  "🍂",
  "🌧️",
  "🌫️",
  "🎄",
]

/**
 * Let's break down a big task into smaller steps.
 * This function takes a year and a month and figures out the weeks and days in that month.
 * We create a structured representation of the month using loops and conditionals.
 * Loops allow us to repeat actions, and conditionals let us make decisions in our code.
 *
 * Definition:
 * Generates an array of weeks for a given month, where each week is an array of days.
 * Each day is represented as an object with a `date` and `value` property.
 * @param {number} year - The year of the month to generate weeks for.
 * @param {number} month - The month to generate weeks for (0-11 for January-December).
 * @param {DataMap} dataMap - An object mapping dates to values.
 * @returns {WeekType[]} - An array of weeks for the month.
 */
const generateWeeksForMonth = (
  year: number,
  month: number,
  dataMap: DataMap,
): Week[] => {
  // This is where we'll store the weeks of the month (Array):
  const weeksForMonth: Week[] = []

  // Create a Date object representing the first day of the given month and year:
  let currentDate = new Date(year, month, 1)

  // Create a Date object for the last day of the month by moving to the next month and subtracting a day:
  const endDate = new Date(year, month + 1, 0)

  // We use a loop (while-loop) to iterate over each day from the start to the end of the month.
  // This loop will continue as long as the currentDate is less than or equal to the endDate:
  while (currentDate <= endDate) {
    // This is where we'll store each week (Array):
    let week: Week = []

    // If we're creating the very first week, we might need to add some placeholder days at the start.
    // This is because the month might not start on the first day of the week (e.g., Sunday):
    if (weeksForMonth.length === 0) {
      // Get the weekday index of the first day of the month (0 for Sunday, 1 for Monday, etc.):
      const startDayOfWeekIndex = currentDate.getDay()
      /**
       * 💡 Hint:
       * startDayOfWeekIndex Sunday is the first day (which is represented as a 0), so now you need to shift Sunday to the last day (which is represented as a 6) and move all other days by one day.
       * Currently the week is represented as the following: [Sun = 0, Mon = 1, Tue = 2, Wed = 3, Thu = 4, Fri = 5, Sat = 6]
       * We want to shift it to the following: [Mon = 0, Tue = 1, Wed = 2, Thu = 3, Fri = 4, Sat = 5, Sun = 6]
       */
      let startDayOfWeekIndexMonday

      // Use a loop (for-loop) to add placeholder days to the week until we reach the actual start day of the month:
      for (let i = 0; i < startDayOfWeekIndex; i++) {
        week.push({ date: null, value: 0 })
      }
    }

    // Now, add the actual days to the week.
    // This inner while loop adds one day at a time until the week is complete (7 days) or we reach the end of the month:
    while (week.length < 7 && currentDate <= endDate) {
      week.push({
        date: new Date(currentDate), // The current day as a new Date object
        value: dataMap[format(currentDate, "yyyy-MM-dd")] || 0, // The value from dataMap or 0 if not found.
      })
      // Move to the next day:
      currentDate.setDate(currentDate.getDate() + 1)
    }

    // If the week has fewer than 7 days because we've reached the end of the month, fill the remaining days with placeholders:
    while (week.length < 7) {
      week.push({ date: null, value: 0 })
    }

    // Add the completed week to the weeksForMonth array:
    weeksForMonth.push(week)
  }

  // Return the array of weeks for the month:
  return weeksForMonth
}

/**
 * Now we organize the whole year by months, each with its own set of weeks and days.
 * We use arrays to hold months and their corresponding weeks, demonstrating data structuring.
 *
 * Definition:
 * Generates an array of months for a given year, where each month is an object with a `month` and `weeks` property.
 * The `month` property is the month number (0-11 for January-December),
 * and the `weeks` property is an array of weeks generated by the `generateWeeksForMonth` function.
 * @param {number} year - The year to generate months for.
 * @param {HabitData[]} data - An array of habit data for the year.
 * @returns {MonthType[]} – An array of months for the year.
 */
export const generateMonthsForYear = (
  year: number,
  data: HabitData[] = [],
): Month[] => {
  // Creating a data map: a key-value pairing where each date points to a value:
  const dataMap: DataMap = data.reduce((acc, cur) => {
    acc[cur.date] = cur.value // Accumulate values by their date
    return acc
  }, {})

  // An array to store each month's data:
  const monthsForYear: Month[] = []

  // There are 12 months in a year, so we loop 12 times:
  for (let month = 0; month < 12; month++) {
    // Generate weeks for the month using our previously defined function:
    const weeks = generateWeeksForMonth(year, month, dataMap)
    // Get only the days with a date (not null):
    const daysWithValue = weeks.flat().filter((day) => day.date)
    // Calculate the total value for the month:
    const totalValue = daysWithValue.reduce((acc, cur) => acc + cur.value, 0)
    // Calculate the average value per day for the month:
    let averageValue = 0
    if (daysWithValue.length > 0) {
      averageValue = totalValue / daysWithValue.length
    }
    // Add this month, with its weeks, to our year array:
    monthsForYear.push({ month, weeks, totalValue, averageValue })
  }

  // We've organized the whole year! 🎉
  return monthsForYear
}
