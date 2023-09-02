import {
  ArrowLeftOnRectangleIcon,
  BellAlertIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

import { lazy, useEffect, useState } from 'react'

import { Link, Outlet } from 'react-router-dom'

import { mainLogo, mainLogoDark } from '../../../../core/values/images-address'
import NavBarPhone from './NavBarPhone'

// import Loading from '../../Loading/Components/Loading'

const Loading = lazy(() => import('../../Loading/Components/Loading'))
const NavButton = lazy(() => import('../../../Components/NavButton'))

function NavBar(props: any) {
  const [loadingGif, setLoadingGif] = useState<boolean>(true)
  const [modal, setModal] = useState(false)

  const modalHandler = () => {
    setModal((perv)=> {
      return !perv
    })
  }

  useEffect(() => {
    const loadingTimeOut = setTimeout(() => {
      setLoadingGif(!loadingGif)
    }, 1000)
    return () => {
      clearTimeout(loadingTimeOut)
    }
  }, [])

  return (
    <>
      {loadingGif == true ? (
        <Loading />
      ) : (
        <div>
          {modal && (
            <div
              onClick={modalHandler}
              className="fixed  z-[50] -mt-2 h-full w-full bg-black bg-opacity-80 "
            ></div>
          )}
          <nav
            className={`container mt-3 flex items-center justify-between  border-b-4 pb-3 lg:pb-0  `}
          >
            <div className="flex items-center gap-3" onClick={modalHandler}>
              <UserIcon
                className="icon lg:hidden "
                onClick={() => props.setAboutORLogin('abouta')}
              />
              <div
                className={`
          simplae-animation relative z-[50] hidden w-52 flex-row-reverse items-center justify-between bg-white p-2 text-news-Items lg:flex ${
            modal ? 'rounded-t-3xl' : 'rounded-3xl'
          }`}
              >
                <UserIcon
                  className="icon !bg-news-Items !text-white "
                  onClick={() => props.setAboutORLogin('abouta')}
                />
                مهمان
                <ChevronDownIcon className="icon w-10 !text-news-Items" />
                {modal && (
                  <Link
                    to={'/login'}
                    className={`simplae-animation absolute left-[0.04rem] top-16 z-30 flex h-20 w-52 items-center gap-2 rounded-3xl bg-news-Items p-2 text-white  opacity-0 active:opacity-100  ${
                      modal && 'rounded-t-none opacity-100'
                    }`}
                  >
                    ورود به حساب کاربری
                    <ArrowLeftOnRectangleIcon className="icon !text-news-Items" />
                  </Link>
                )}
              </div>
              <BellAlertIcon className="icon " />
              <Cog6ToothIcon className="icon hidden lg:block" />
            </div>
            <img src={mainLogoDark} alt="" className="h-[3.25rem] lg:hidden" />
            <EllipsisVerticalIcon onClick={modalHandler} className="icon lg:hidden " />
            <ul className="mt-3 hidden flex-row-reverse  lg:flex">
              <img
                src={mainLogoDark}
                alt=""
                className="hidden h-[3.25rem] pl-8 lg:block"
              />
              <NavButton to={'/'} text={'خانه'} />
              <NavButton to={'/'} text={'درس ها'} bulletClass={'!left-10'} />
              <NavButton
                to={'/'}
                bulletClass={'!left-14'}
                text={'گپ و گفتگو'}
              />
              <NavButton
                to={'/aboutus'}
                bulletClass={'!left-10'}
                text={'درباره ما'}
              />
            </ul>
          </nav>
          <NavBarPhone modalHandler={modalHandler} modal={modal} />
          <Outlet />
        </div>
      )}
    </>
  )
}

export default NavBar
