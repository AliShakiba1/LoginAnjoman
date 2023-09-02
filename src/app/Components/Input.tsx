import { memo } from "react"

type inputProps = {
  htmlFor: string
  label: string
  placeholder?: string
  value?:string
  type: string
  children: string | JSX.Element | JSX.Element[]
  labelClassName?: string
  inputClassName?: string
}

function Input({
  htmlFor,
  label,
  children,
  type,
  placeholder,
  labelClassName,
  inputClassName,
  value,
}: inputProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={` relative flex flex-col gap-3 pb-4  text-right text-lg text-white  ${labelClassName}`}
    >
      {' '}
      {label}
      {children}
      <input
        type={type}
        name={type}
        id={htmlFor}
        value={value}
        placeholder={placeholder}
        className={` w-full rounded-2xl  border-0 pb-3 pr-14 pt-4 text-right text-sm  text-[#728EA5]  outline-news-Items  placeholder:text-[#728EA5] ${inputClassName} `}
      />
    </label>
  )
}

export default memo(Input)
