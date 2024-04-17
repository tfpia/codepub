import { TimeLine } from "@/components/instructions/Timeline"
import React from "react"
export default function Guide() {
  return (
    <div className="flex flex-col pt-12 justify-center text-center bg-lightpurple">
      <div>
        <h1 className="pb-5 text-xl font-bold text-black">Instructions</h1>
        <div
          className={
            "w-[30%] max-w-[900px] p-[20px] rounded-2xl bg-purple text-center mx-auto mb-[1em] text-black"
          }
        >
          In the following you find a guide that will lead you through the
          different stages of the workshop. Each level is based on the levels
          above. <br /> <br />
          Therefore{" "}
          <span className="font-bold">
            no matter your technical background we encourage you to start from
            Level 1{" "}
          </span>
          and work your way up. It is not intended that you make it all the way
          towards the end of level 4 but rather get as far as suitable and have
          an outlook where to go next even after the workshop.
        </div>
        <div
          className={
            "w-[30%] max-w-[900px] p-[20px] rounded-2xl bg-purple text-center mx-auto "
          }
        >
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHJuaXRxajVpMzd0MHBpZDB5anAxcGY3Mmt1bzJiOHIwdW5odW5wZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4bAEIAB84zPwc/giphy.gif"
            alt="new"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="mx-auto text-black">
        <TimeLine />
      </div>
      <div className="mb-12">
        <div
          className={
            "w-[40%] max-w-[900px] p-[20px] rounded-2xl bg-light text-center mx-auto text-black"
          }
        >
          <span className="text-xl">🏆 </span> <br />
          No matter what level you completed until now, you accessed data and
          transformed it in a way that it gives you a deeper insight into the
          saving behavior that was tracked.
          <br />
          With those insights you can keep yourself accountable to your habits
          and learn from them to grow in your personal endeavors.
          <br />
          <br />
          Thank you for coming on this journey with us!
          <br />
          <span className="text-xl">💕</span>
        </div>
      </div>
    </div>
  )
}
