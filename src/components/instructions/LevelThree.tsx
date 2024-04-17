"use client"

import { TimeLineItem } from "./TimeLineItem"
import { PuzzlePieceIcon } from "@heroicons/react/24/outline"
import RotatingChevron from "../RotatingChevron"
import { useState } from "react"

export const LevelThree = () => {
  const [isSolution1Open, setSolution1Open] = useState(false)

  return (
    <TimeLineItem headline="Level 3">
      <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md text-center">
        <div className="text-center font-bold pb-2">✨ Requirements ✨</div>
        <p>
          Finished Level 2 or knowing how to build React components in NextJS,
          understanding how data flows through the application
        </p>
      </div>

      <div>
        <div>
          Now that we can interact with the visualisation we want to learn
          something from it. Making decisions based on data is nothing new in
          the tech world. For this we use data-driven decision-making (DDDM)
          <br />
          <br />
          <a
            href="https://www.tableau.com/learn/articles/data-driven-decision-making"
            target="_blank"
            className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
          >
            What is data-driven decision-making?
          </a>
          <div className="pt-2 pb-4">
            "Data-driven decision-making (DDDM) is defined as using facts,
            metrics, and data to guide strategic business decisions that align
            with your goals, objectives, and initiatives."
          </div>
        </div>
        <p className="pt-[1em]">
          Therefore we want to leverage the data we have to provide insights
          about our personal saving behavior. <br />
        </p>

        <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md ">
          <div className="text-center font-bold pb-2">Task 1 ✍️</div>
          Think about what you would like to read out of the visualisation. E.g
          what was the month with the most savings, or what is the average
          saving during one week? But get creative.
        </div>
        <div id="hint01" className="my-[1em] bg-light rounded-xl p-4">
          💡 Choose one metric you would like to display and display it on the
          page of the visualisation. This can be done as a simple text or maybe
          you want to use a second visualisation to display trends in your habit
          tracking.
        </div>
        <div
          id="solution01"
          className="flex-column border border-light rounded-xl p-4"
        >
          <div
            className="flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => setSolution1Open((prevState) => !prevState)}
          >
            <h3
              className="font-semibold flex items-center gap-2"
              data-tooltip-id="solution-1"
            >
              <PuzzlePieceIcon className="w-4 h-4" />
              Solution
            </h3>
            <RotatingChevron isOpen={isSolution1Open} />
          </div>
          {isSolution1Open && (
            <div className="mt-2">
              We provided an example of the average saving per month. You can
              start writing your own function and use ours as a solution
              reference or as an inspiration.
              <br />
              <br />
              Search for the function 'generateMonthsForYear' in the file
              <i>src/utils/utils.ts.</i>
              <br />
              <br />
              At the end of the function we push month, weeks, totalValue,
              averageValue in monthsForYear. This means that you can see
              averageValue in <i>src/app/visualisation/page.tsx</i> in your
              console.log(data). <br />
              <br />
              Now place it around or in the React component {`<Month/>`} and use
              Math.round() to display the average value rounded to the nearest
              integer.
            </div>
          )}
        </div>
        <div className="p-4 bg-violet-300 rounded-xl my-4 mx-auto shadow-md text-center">
          <div className="text-center font-bold">
            ✨ You enabled data-driven accountability for the habit tracker ✨
          </div>
        </div>
      </div>
    </TimeLineItem>
  )
}
