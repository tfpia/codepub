import Link from "next/link"
import { BanknotesIcon } from "@heroicons/react/24/solid"

// 🌟 You made it to the right page for Task 1 of Level 1 🌟

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-purple text-center text-white font-bold">
      <div className="max-w-[450px] flex justify-center items-center flex-col text-[14px] md:text-[16px] px-[45px] md:px-0">
        <BanknotesIcon width={45} className="text-green-800" />
        <h1 className="py-[15px] text-[18px] md:text-[32px]">
          Visualizing Financial Growth with Habit Tracking
        </h1>
        <p className="font-normal">
          Discover how technology can change the way you manage personal habits
          like daily savings through our interactive workshop.
        </p>

        <div className="flex justify-center flex-col md:flex-row w-full md:space-x-6 mt-6 sm:mt-10">
          <Link
            className="bg-green-800 hover:bg-white text-white hover:text-green-800 h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
            href="/visualisation"
          >
            Visualisation
          </Link>

          <Link
            className="text-green-800 hover:text-white h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
            href="/guide"
          >
            Instructions →
          </Link>
        </div>
      </div>
    </div>
  )
}
