import { LevelOne } from "./LevelOne"
import { LevelTwo } from "./LevelTwo"
import { LevelThree } from "./LevelThree"
import { LevelFour } from "./LevelFour"

export const TimeLine = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:grid grid-cols-9 mx-auto leading-5 text-l tracking-wide">
        <LevelOne />
        <LevelTwo />
        <LevelThree />
        <LevelFour />
        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-[70px] w-1 bg-purple pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-[70px] -mt-3 rounded-full bg-dark shadow"></div>
        </div>
      </div>
    </div>
  )
}
