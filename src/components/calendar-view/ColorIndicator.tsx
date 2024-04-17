import { getColorForValue } from "@/utils/colorUtils"

const referenceValues = [
  { value: 0, label: "No saving" },
  { value: 250, label: "Up to €250" },
  { value: 500, label: "Up to €500" },
  { value: 750, label: "Up to €750" },
  { value: 1000, label: "Up to €1,000" },
  { value: 1500, label: "Above €1,000" },
]

export const ColorIndicator = () => {
  return (
    <div className="flex justify-center items-center my-4">
      {referenceValues.map((reference, index) => (
        <div
          key={index}
          className={`flex items-center ${getColorForValue(reference.value)} w-50 h-10 p-4`}
        >
          <span className="text-sm text-gray-700">{reference.label}</span>
        </div>
      ))}
    </div>
  )
}
