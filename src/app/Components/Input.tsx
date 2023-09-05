import { memo } from 'react'

type inputProps = {
  htmlFor: string
  label: string
  placeholder?: string
  type: string
  children: string | JSX.Element | JSX.Element[]
  labelClassName?: string
  inputClassName?: string
  onChange?: any
  value?: any
  error?: any
  onBlur?: any
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
  onChange,
  error,
  onBlur,
}: inputProps) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={` relative flex flex-col gap-3 pb-4  text-right text-lg text-white  ${labelClassName}`}
      >
        {' '}
        {label}
        {children}
        <input
          type={type}
          name={htmlFor}
          id={htmlFor}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className={` w-full rounded-2xl  border-0 pb-3 pr-14 pt-4 text-right text-sm  text-[#728EA5] outline-none  placeholder:text-[#728EA5] ${inputClassName} `}
        />
      </label>
      {error && (
        <span className="-mt-2 text-right text-sm text-cancel-Status">
          {error}
        </span>
      )}
    </>
  )
}

export default memo(Input)
