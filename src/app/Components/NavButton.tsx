import { Link } from 'react-router-dom'
function NavButton(props: any) {
  return (
  
      <Link
        to={props.to}
        className=" simplae-animation group relative cursor-pointer p-5 hover:-translate-y-5"
      >
        {props.text}
        <div
          className={`simplae-animation left absolute bottom-2 left-7 hidden h-[0.70rem]  w-[0.70rem] rounded-full bg-white group-hover:block
        ${props.bulletClass}
        `}
        ></div>
      </Link>
    
  )
}

export default NavButton
