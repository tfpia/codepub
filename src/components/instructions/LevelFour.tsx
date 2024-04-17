import Link from "next/link"
import { TimeLineItem } from "./TimeLineItem"
import { GoogleSheets } from "./GoogleSheets"

export const LevelFour = () => {
  return (
    <>
      <TimeLineItem headline="Level 4 - For the Future" onRightSide={true}>
        <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md text-center">
          <div className="text-center font-bold pb-2">✨ Requirements ✨</div>
          <p>
            Knowing how to do Level 3 and how to work with APIs and parsing CSV
            to an Object. (Optional: Google Account)
          </p>
        </div>
        <p className="pt-[1em]">
          For now we worked with a prepared Google Sheet. The next step is to
          create your own. In order to use it in the same way as we did, it
          needs to be a public sheet.
        </p>
        <div id="hint01" className="my-[1em] bg-light rounded-xl p-4">
          🚨 if you decide to use a public sheet use mock values. Don't share
          your personal data online
        </div>
        <p className="">
          For testing purposes we recommend using a public sheet for the
          duration of this workshop. If you are interested in how to access also
          private sheets, check out the{" "}
          <Link
            className="underline text-violet-900 hover:text-blue-800 visited:text-purple-600"
            href={"https://developers.google.com/workspace/guides/get-started"}
            target="_blank"
          >
            Google API Documentation.
          </Link>{" "}
          Its requires you to authenticate which requires some more effort and
          time.
        </p>
        <div className="p-6 bg-violet-300 rounded-xl my-4 mx-auto shadow-md ">
          <div className="text-center font-bold pb-2">Task 1 ✍️</div>
          <p className="pt-[1em]">
            Create a sheet like the one from the previous steps and add a third
            column with expenses. Make sure the data gets correctly transformed
            into an object from the CSV file.
          </p>
          <p className="pt-[1em]">
            Now you got additional data available. Repeat Level 3 while taking
            this new attribute into account. What value can you pull out of it,
            what new metric can be displayed.
          </p>
          <p className="pt-[1em]">
            Implement a new insight underneath the original visualisation. Maybe
            you calculate your net savings, or use a second visualisation to
            display expenses and get insights into the spending habits too.
          </p>
        </div>
        <div className="p-4 bg-violet-300 rounded-xl my-4 mx-auto shadow-md text-center">
          <div className="text-center font-bold">
            ✨ You now gained some deeper insights into the data ✨
          </div>
        </div>
      </TimeLineItem>
      <TimeLineItem
        headline="Tip: How to retrieve data from Google Sheets"
        onRightSide={true}
      >
        <GoogleSheets />
      </TimeLineItem>
    </>
  )
}
