"use client"

import { PuzzlePieceIcon } from "@heroicons/react/24/outline"
import { TimeLineItem } from "./TimeLineItem"
import RotatingChevron from "../RotatingChevron"
import { useState } from "react"

export const LevelTwo = () => {
  const [isSolution1Open, setSolution1Open] = useState(false)
  const [isSolution2Open, setSolution2Open] = useState(false)

  return (
    <TimeLineItem headline="Level 2" onRightSide={true}>
      <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md text-center">
        <div className="text-center font-bold pb-2">✨ Requirements ✨</div>
        <p>
          Finished Level 1 and therefore now knowing how to handle env variables
          and understanding how data is retrieved through a backend.
        </p>
      </div>

      <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md ">
        <div className="text-center font-bold pb-2">Task 1 ✍️</div>
        <p className="pt-[1em]">
          You might have noticed that the visualisation only shows the data of
          last year (2023). But what if we want to also already want to display
          this years data (2024)?
        </p>
        <p className="pt-[1em]">
          We want to add a component that enables us to switch between the
          years. If your familiar with how to create your own components, feel
          free to create your own variation. If not or want to save some time,
          there is a prepared component waiting in the components folder, that
          only needs to be added to the page.
        </p>
        <div id="hint01" className="my-[1em] bg-light rounded-xl p-4">
          💡 Go to the visualisation page here:
          <i>src/app/visualisation/page.tsx</i> <br />
          <br />
          Instead of using the React Component Title which is a static
          component, you can replace it by the React Component
          TitleWithYearPicker. <br />
          <br />
          The component TitleWithYearPicker exists already here:{" "}
          <i>src/components/calendar-view/TitleWithYearPicker.tsx</i> In this
          file you can see what are the props needed for this component and pass
          the right props in the visualisation page.
          <br />
          Hint: In your Visual Studio Code, you can do Cmd + P (sometimes Cmd +
          Shift + P)to search a fileName.
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
              {" "}
              <a
                href="https://react.dev/learn/passing-props-to-a-component"
                target="_blank"
                className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
              >
                What are props in React?
              </a>
              <div className="pt-2 pb-4">
                React components use props to communicate with each other. Every
                parent component can pass some information to its child
                components by giving them props.
              </div>
              Your created component should look like this:
              <br />{" "}
              <div className=" bg-gray-800 text-white rounded-xl my-4 mx-auto shadow-md">
                <div className="pl-4 p-6 text-yellow-500">
                  {`<TitleWithYearPicker
                    onYearChange={handleYearChange}
                    selectedYear= {selectedYear}
                    />`}
                </div>
              </div>
              The parent component page.tsx pass some props onYearChangeand
              selectedYear to the component TitleWithYearPicker. You also need
              to create a useState which will store and set the value of the
              selectedYear:
              <div className=" bg-gray-800 text-white rounded-xl my-4 mx-auto shadow-md">
                <div className="pl-4 p-6 text-yellow-500">
                  {`const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())`}
                </div>
              </div>
              <a
                href="https://react.dev/reference/react/useState"
                target="_blank"
                className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
              >
                What is a useState?
              </a>
              <div className="pt-2 pb-4">
                It is a React Hook that lets you add a state variable to your
                component.
              </div>
              And you need a handleYearChange function to handle the
              onYearChange when a different date is picked:
              <div className=" bg-gray-800 text-white rounded-xl my-4 mx-auto shadow-md">
                <div className="pl-4 p-6 text-yellow-500">
                  {`const handleYearChange = (year: number) => {setSelectedYear(year)`}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md ">
        <div className="text-center font-bold pb-2">Task 2 ✍️</div>
        <p className="pt-[1em]">
          Now your task is to change the starting day of the week from Sunday to
          Monday.
        </p>
        <div id="hint02" className="my-[1em] bg-light rounded-xl p-4">
          💡 You can check the file <i>src/utils/utils.ts</i> to find
          interesting functions about months and weeks. Here's the link to the
          documentation for{" "}
          <a
            className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay#return_value"
            target="_blank"
          >
            getDay
          </a>
          , to help you build your solution.
        </div>
        <div
          id="solution02"
          className="flex-column border border-light rounded-xl p-4"
        >
          <div
            className="flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => setSolution2Open((prevState) => !prevState)}
          >
            <h3
              className="font-semibold flex items-center gap-2"
              data-tooltip-id="solution-1"
            >
              <PuzzlePieceIcon className="w-4 h-4" />
              Solution
            </h3>
            <RotatingChevron isOpen={isSolution2Open} />
          </div>
          {isSolution2Open && (
            <div className="mt-2">
              <p>
                In utils.ts, you can add below startDayOfWeekIndex the following
                constant:
              </p>
              <div className=" bg-gray-800 text-white rounded-xl my-4 mx-auto shadow-md">
                <div className="pl-4 p-6 text-yellow-500">
                  {`let startDayOfWeekIndexMonday;
      if (startDayOfWeekIndex === 0) {
        startDayOfWeekIndexMonday = 6;
      } else {
        startDayOfWeekIndexMonday = startDayOfWeekIndex - 1;
      }`}
                </div>
              </div>
              <p>
                Explanation: <br /> Sunday is the first day (represented as 0),
                so now you need to shift Sunday to be the last day (represented
                as 6) and move all other days by one day.
              </p>
              <p>
                Currently the week is structured as the following:
                <br />
                Sun = 0, Mon = 1, Tue = 2, Wed = 3, Thu = 4, Fri = 5, Sat = 6
              </p>
              <p>
                Now we want to shift it to the following:
                <br />
                Mon = 0, Tue = 1, Wed = 2, Thu = 3, Fri = 4, Sat = 5, Sun = 6
              </p>
              <br />
              <br />
              <p>
                Use the new constant in the for loop, instead of using
                startDayOfWeekIndex. You should now also modify the constant
                'weekdays' to start by 'Mon':
              </p>
              <div className=" bg-gray-800 text-white rounded-xl my-4 mx-auto shadow-md">
                <div className="pl-4 p-6 text-yellow-500">
                  export const weekdays = [ "Mon", "Tue", "Wed", "Thu", "Fri",
                  "Sat","Sun"]
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 bg-violet-300 rounded-xl my-4 mx-auto shadow-md text-center">
        <div className="text-center font-bold">
          ✨ Your visualisation is now interactive✨
        </div>
      </div>
    </TimeLineItem>
  )
}
