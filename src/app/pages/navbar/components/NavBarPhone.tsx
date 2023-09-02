import {
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { ReactNode, memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CopyRight from '../../../Components/CopyRight'

import logoInMobile from './logoinmenuphone.svg'

type imenuItem = {
  id: number
  name: string
  disable: boolean
  icon: ReactNode
  path: string
}

function NavBarPhone(props: any) {
  const menuItem: imenuItem[] = [
    {
      id: 1,
      name: 'خانه',
      icon: <HomeIcon className="icon " />,
      disable: false,
      path: '/',
    },
    {
      id: 2,
      name: 'درس ها',
      icon: <BookOpenIcon className="icon" />,
      disable: true,
      path: '/',
    },
    {
      id: 3,
      name: 'کپ و گفت و گو',
      icon: <ChatBubbleLeftRightIcon className="icon" />,
      disable: true,
      path: '/',
    },
    {
      id: 4,
      name: 'درباره ما',
      icon: <UserGroupIcon className="icon" />,
      disable: false,
      path: '/aboutus',
    },
  ]

  return (
    <div
      className={`absolute right-0 top-0 z-50 h-full w-7/12  flex-col items-center justify-between rounded-l-3xl bg-persian-blue-dark text-news-Items transition-all duration-500 ease-in lg:hidden ${
        props.modal == true ? 'flex translate-x-0' : 'translate-x-full hidden'
      } `}
    >
      <ul className="mt-10 flex flex-col items-end self-end ">
        {menuItem.map(item => (
          <button onClick={props.modalHandler}>
            <NavLink
              to={item.path}
              className="simplae-animation mb-3 flex w-64 flex-row-reverse items-center justify-start rounded-l-xl bg-white p-1 text-news-Items hover:-translate-x-10 hover:scale-105"
            >
              {item.icon}
              <li className="pr-4 pt-1">{item.name}</li>
            </NavLink>
          </button>
        ))}
      </ul>
      <img src={logoInMobile} alt="logo" className="-mt-40 w-60" />
      <CopyRight className={'mb-3 '} />
    </div>
  )
}

export default memo(NavBarPhone)
