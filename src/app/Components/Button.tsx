export const ButtonBlue = (props: any) => {
  return (
    <button
      className={`mr-5 mt-7  w-32 rounded-xl bg-persian-blue-800  p-3 text-white ${props.btnBlueClass}`}
    >
      {props.text}
    </button>
  )
}

export const ButtonGray = (props: any) => {
  return (
    <button
    onClick={props.onClick}
      className={`  ${props.btnBlueClass}  rounded-xl border-2 border-white   bg-gray-low p-3  text-white`}
    >
      {props.children}
    </button>
  )
}
