import Link from "next/link"

export const Error = () => {
  return (
    <div className="relative flex flex-col justify-center items-center font-serif p-[30px] bg-gray-100 rounded-lg drop-shadow-xl">
      <p className="text-lg font-semibold mb-8">
        {" "}
        Oops... an error occurred while fetching your data 😬
      </p>
      <div className="pointer-events-none h-[550px] w-[550px] mb-4">
        <iframe
          src="https://giphy.com/embed/APqEbxBsVlkWSuFpth"
          className="w-full h-full"
        />
      </div>
      <p className="text-lg mb-2">Did you add your CSV file? 👀</p>
      <p className="text-lg">
        For more insights check 🆘{" "}
        <Link className={"underline text-violet-800"} href="/guide">
          instructions
        </Link>{" "}
        🆘
      </p>
    </div>
  )
}
