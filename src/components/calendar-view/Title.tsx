interface TitleProps {
  selectedYear: number
}

export const Title: React.FC<TitleProps> = ({ selectedYear }) => {
  return (
    <h1 className="text-4xl font-bold text-green-900 mb-6">
      🎨 Saving Palette 🎨: Coloring Your {selectedYear} Monthly Finances
    </h1>
  )
}
