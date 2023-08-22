function CopyRight(props :any) {
  return (
    <>
      <div className={`mx-auto mt-6 text-center text-sm text-white  ${props.className}`}>
        توسعه یافته توسط
        <a href="" className="text-loghman">
          {' '}
          گروه نرم افزار لقمان©
        </a>
      </div>
    </>
  )
}

export default CopyRight
