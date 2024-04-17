"use client"

import Image from "next/image"
import Link from "next/link"
import { PuzzlePieceIcon } from "@heroicons/react/24/outline"
import RotatingChevron from "../RotatingChevron"
import { useState } from "react"

export const GoogleSheets = () => {
  const [isSolution1Open, setSolution1Open] = useState(false)

  return (
    <>
      <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md text-center">
        <div className="text-center font-bold pb-2">
          ✨ Do you want to create your own CSV link? ✨
        </div>
        <p>
          What you need: You'll need a Google account. Navigate to{" "}
          <Link
            className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
            href="https://sheets.google.com/"
            target="_blank"
          >
            Google Sheets
          </Link>{" "}
          and create a new Sheet document. You can create your own data or
          import the existing CSV and change it as you like.
        </p>
      </div>

      <div
        id="follow-along-screenshots"
        className="flex-column border border-light rounded-xl p-4"
      >
        <div
          className="flex flex-row items-center gap-2 cursor-pointer"
          onClick={() => setSolution1Open((prevState) => !prevState)}
        >
          <h3
            className="font-semibold flex items-center gap-2"
            data-tooltip-id="follow-along-screenshots"
          >
            <PuzzlePieceIcon className="w-4 h-4" />
            Step by step guide
          </h3>
          <RotatingChevron isOpen={isSolution1Open} />
        </div>
        {isSolution1Open && (
          <div className="flex items-center justify-center flex-col my-8">
            <Image
              src="/assets/1-public-to-web.png"
              width={500}
              height={500}
              alt="Search for 'Publish to the web' in Google Sheets"
            />
            <br />
            <Image
              src="/assets/2-select-your-tab.png"
              width={500}
              height={500}
              alt="Select your tab"
            />
            <br />
            <Image
              src="/assets/3-copy-your-public-link.png"
              width={500}
              height={500}
              alt="Copy your public link from Google Sheets"
            />
          </div>
        )}
      </div>
    </>
  )
}
