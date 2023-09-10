import { memo } from 'react'

export const ButtonBlue = memo((props: any) => {
  return (
    <button
      className={`from-wedgewood-400 to-wedgewood-700 mr-5  mt-7 w-32 rounded-xl bg-news-Items p-3 text-white   ${props.btnBlueClass}
      
      `}
      type={props.type}
    >
      {props.text}
    </button>
  )
})
export const ButtonGray = memo((props: any) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`  ${props.btnBlueClass}   h-12 rounded-xl border-2   border-white bg-gray-low  p-1.5 text-white `}
    >
      {props.children}
    </button>
  )
})
