type ButtonProps = {
  isPrimary: boolean
  label: string
  handleClick: (event: React.MouseEvent) => void
}

const Button = ({ isPrimary, label, handleClick }: ButtonProps) => {
  return (
    <button
      className={`${
        isPrimary
          ? 'mb-2 mt-4 rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center text-sm text-gray-900 md:hidden'
          : 'mb-8 text-blue-600 hover:text-blue-800'
      }`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default Button
