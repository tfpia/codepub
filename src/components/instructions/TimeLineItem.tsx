interface TimeLineItemProps {
  headline: string
  children: React.ReactNode
  onRightSide?: boolean
}

export const TimeLineItem = ({
  headline,
  children,
  onRightSide,
}: TimeLineItemProps) => {
  return (
    <>
      {!onRightSide ? (
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-purple col-start-1 col-end-5 p-6 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-bold text-lg mb-1">{headline}</h3>
            <div className="leading-tight text-left">{children}</div>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-purple pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-800 shadow"></div>
          </div>
        </div>
      ) : (
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-purple pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-800 shadow"></div>
          </div>
          <div className="bg-purple col-start-6 col-end-10 p-6 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-bold text-lg mb-1">{headline}</h3>
            <div className="leading-tight text-left">{children}</div>
          </div>
        </div>
      )}
    </>
  )
}
