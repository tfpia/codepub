import { generateMonthsForYear } from "@/utils/utils"

export const fetchData = async (
  year: number,
  signal: any,
  onSuccess: any,
  onError: any,
) => {
  try {
    // Hint: Ever talked to a server? Well, you're about to
    const res = await fetch(`/api/getGoogleApiData/${year}`, {
      signal,
    })

    // Hint: Like opening a present! 🎁 you need to unwrap it first in order to find out what you got!
    const fetchedData = await res.json()
    const data = await generateMonthsForYear(year, fetchedData)
    onSuccess(data)
  } catch (error) {
    if ((error as Error).name !== "AbortError") {
      onError(error)
    }
  }
}
