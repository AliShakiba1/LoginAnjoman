import { memo } from "react"
import { Link } from "react-router-dom"

function CopyRight(props :any) {
  return (
    <>
      <div
        className={`mx-auto mt-6 text-center text-sm text-white  ${props.className}`}
      >
        توسعه یافته توسط
        <Link to={'/'} className="text-loghman">
          {' '}
          گروه نرم افزار لقمان©
        </Link>
      </div>
    </>
  )
}

export default memo(CopyRight)
