function NavButton(props: any) {
  return (
    <button className=" simplae-animation group relative p-5 hover:-translate-y-5">
      {props.text}
      <div
        className={`simplae-animation absolute bottom-2 left-7 hidden h-[0.70rem]  w-[0.70rem] rounded-full bg-white group-hover:block
        ${props.bulletClass}
        `}
      ></div>
    </button>
  )
}

export default NavButton


