"use client"

import Link from "next/link"
import { TimeLineItem } from "./TimeLineItem"
import RotatingChevron from "../RotatingChevron"
import { useState } from "react"
import { PuzzlePieceIcon } from "@heroicons/react/24/outline"

export const LevelOne = () => {
  const [isSolution1Open, setSolution1Open] = useState(false)
  const [isSolution2Open, setSolution2Open] = useState(false)

  return (
    <TimeLineItem headline="Level 1">
      <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md text-center">
        <div className="text-center font-bold pb-2">✨ Requirements ✨</div>
        <p>Curiosity</p>
      </div>
      <div className="leading-tight text-justify">
        If you made it to this point, you already managed to start the
        application locally on your machine. Your Client is now running on{" "}
        <b>localhost:3000</b> or in the sandbox.
        <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md ">
          <div className="text-center font-bold pb-2">Task 1 ✍️</div>
          To see your current empty visualisation, open{" "}
          <Link
            href={"/visualisation"}
            target="_blank"
            className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
          >
            /visualisation
          </Link>{" "}
          in a new tab.
          <p>
            In order to retrieve data from the GoogleSheet API, you need to
            define an{" "}
            <Link
              className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
              href={
                "https://create-react-app.dev/docs/adding-custom-environment-variables/"
              }
              target="_blank"
            >
              {" "}
              environment variable
            </Link>{" "}
            for <b>PUBLIC_CSV_URL</b>. This contains the link to the prepared
            public google sheet that holds our data for the visualisation.
          </p>
          <div>
            {" "}
            To do that, create a new file called .env and add the following
            code. You can click on it once to copy it to your clipboard.
            Normally environment variables should never be added anywhere but
            the .env file. We only provide it here to make it easier to provide
            them to you.
            <div
              className=" bg-gray-800 text-white rounded-xl my-4 mx-auto shadow-md"
              onClick={() => {
                navigator.clipboard.writeText(
                  'PUBLIC_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTf2va0x9h_a4UMHt7KJFMMqS3FKRsDBOOEhA25mtpHlG_rVbgDwMnnQIaDox_SPi-G9LdgUnmEt0Uc/pub?gid=0&single=true&output=csv"',
                )
                alert("env file content copied to clipboard")
              }}
            >
              <div className="pl-4 p-6 max-w-[450px] text-nowrap leading-normal overflow-scroll text-yellow-500 hover:text-pink-300 hover:cursor-copy">
                PUBLIC_CSV_URL =
                'https://docs.google.com/spreadsheets/d/e/2PACX-1vTf2va0x9h_a4UMHt7KJFMMqS3FKRsDBOOEhA25mtpHlG_rVbgDwMnnQIaDox_SPi-G9LdgUnmEt0Uc/pub?gid=0&single=true&output=csv'
              </div>
            </div>
            <p>
              Don't forget to restart! First you need to kill the current app by
              Ctrl + C in your terminal and then run npm run start again.
            </p>
            <br />
            <p>
              Now you are good to go to access the data from the sheet. You can
              use the built in console to print out the data first. Find the
              place in the code where the data is fetched before it is fed into
              the visualisation component. Use the following code to log the
              data into your console.
            </p>
            <br />
            <Link
              href={
                "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools#how_to_open_the_devtools_in_your_browser"
              }
              target="_blank"
              className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
            >
              How to view a console.log in the browser?
            </Link>
            <div className="bg-gray-800 text-white rounded-xl my-4 mx-auto shadow-md ">
              <div className="pl-4 p-6 text-yellow-500">
                console.log("Data retrieved", data)
              </div>
            </div>
            <p>Once that it is done, have a look at the visualisation again.</p>
            <div id="hint01" className="my-[1em] bg-light rounded-xl p-4">
              💡 If you dont know where to put the console.log think about where
              the data needs to go in the end in our use case. In the end we
              want to display it in our visualisation. So finding the code for
              that might be a good start.
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
                  You can place the console.log("Data retrieved", data) in
                  <i>src/app/visualisation/page.tsx</i> before the return, but
                  after the useEffect!
                  <br />
                  <br />
                  <a
                    href="https://react.dev/reference/react/useEffect"
                    target="_blank"
                    className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
                  >
                    What is a useEffect?
                  </a>
                  <div className="pt-2 pb-4">
                    It is a React Hook that lets you synchronize a component
                    with an external system. It is placed at the top level of
                    your component.
                  </div>
                  <a
                    href="https://react.dev/reference/react/hooks"
                    target="_blank"
                    className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
                  >
                    What is a React Hook?
                  </a>
                  <div className="pt-2 pb-4">
                    Hooks let you use different React features from your
                    components, in particular reuse stateful logic without
                    changing your component hierarchy. You can either use the
                    built-in Hooks or combine them to build your own.
                  </div>
                  <p>
                    Then go to the browser and do F12 (for some Ctrl + shift +
                    C) to open the DevTools of your browser. Go to the console
                    panel and here you can visualize your data!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-violet-300 rounded-xl my-4 mx-auto shadow-md text-center">
        <div className="text-center mb-4 mt-4 tex-md font-bold">
          ✨ Now it should be filled with data ✨
        </div>
      </div>
      <br />
      <div className="text-left">
        <p className="font-bold">We're gonna see now how to style your app!</p>
        <br />
        In this NextJS React Application we use Tailwind to style our
        components.
        <Link
          className={
            "underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
          }
          href={"https://nextjs.org/learn/dashboard-app/css-styling"}
          target="_blank"
        >
          <br />
          <br />
          What is Tailwind ?
        </Link>
        <div className="pt-2 pb-4">
          It is a CSS framework that speeds up the development process by
          allowing you to quickly write utility classes directly in your TSX
          markup. In Tailwind, you style elements by adding class names. For
          example, adding the class "text-blue-500" will turn the {`<h1>`} into{" "}
          {`<h1 className="text-blue-500">`} which will turn the text inside
          this html tag blue.
        </div>
      </div>
      <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md ">
        <div className="text-center font-bold pb-2">Task 2 ✍️</div> The next
        task is to interact with the code to customize the CSS made with
        Tailwind. Change the colors for the different days. How would you have
        more nuanced colors?
        <div id="hint02" className="my-[1em] bg-light rounded-xl p-4">
          💡 We prepared some tailwind utility class colors for you to use. To
          see which ones, check the <b>tailwind.config.ts</b>. You will find
          them there. <br />
          Hint: In your Visual Studio Code, you can do Cmd + P (sometimes Cmd +
          Shift + P) to search a fileName.
        </div>
        <br />
        <br />
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
              Open the file <i>src/utils/colorUtils.ts.</i> Follow the
              instructions in the file! Change "bg-green-100" to be "bg-purple"
              for example. Pick any predefined color from the safelist in
              tailwind.config.ts
              <br />
              <br />
              <div> Have a look at the visualisation again</div>
              <Link
                className={
                  "underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
                }
                href={
                  "https://tailwindcss.com/docs/content-configuration#safelisting-classes"
                }
                target="_blank"
              >
                <br />
                Why the safelist?
              </Link>
              <div>
                Possible Solution to implemente some more ranges for the values
                <div className=" bg-gray-800 text-white rounded-xl my-4 mx-auto shadow-md ">
                  <div className="pl-4 p-6 text-yellow-500">
                    {`if (value === 0) return "bg-gray-100"`} <br />
                    {`if (value <= 100) return "bg-range-100"`}
                    <br />
                    {`if (value <= 250) return "bg-range-250"`}
                    <br />
                    {`if (value <= 350) return "bg-range-350"`}
                    <br />
                    {`if (value <= 500) return "bg-range-500"`}
                    <br />
                    {`if (value <= 600) return "bg-range-600"`}
                    <br />
                    {`if (value <= 750) return "bg-range-750"`}
                    <br />
                    {`if (value <= 850) return "bg-range-850"`}
                    <br />
                    {`if (value <= 1000) return "bg-range-1000"`}
                    <br />
                    {`return "bg-green-600"`}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="pt-2 pb-4">
          Optional: Try to change the colors as you want to style the app as you
          want. You can also add new colors to the tailwind config or edit the
          existing ones.
        </div>
      </div>
    </TimeLineItem>
  )
}
