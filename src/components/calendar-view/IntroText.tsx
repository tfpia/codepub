export const IntroText = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="mx-auto text-lg leading-relaxed text-green-700 max-w-4xl">
      {children}
    </p>
  )
}
