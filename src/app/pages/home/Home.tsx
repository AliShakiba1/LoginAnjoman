// import { Button } from '@material-tailwind/react'
import { Suspense, lazy, useEffect, useState } from 'react'
import useDocumentTitle from '../../../core/utils/useDocumentTitle'
// import { mainLogo } from '../../../core/values/images-address'
import Login from '../Login/Components/Login'
import Register from '../Regester/components/Register'
// import NavBar from '../navbar/components/navbar'

import Loading from '../Loading/Components/Loading'
import AboutUs from '../aboutUs/Components/AboutUs'
import NavBar from '../navbar/components/NavBar'
import './styles/App.css'

import CalendarFooterPart from '@/app/Components/Calendar/CalendarFooterPart'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import CalendarPart from '../../Components/Calendar/CalendarPart'
import News from '../../Components/News/News'
import MainPagePhoto from '../MainPagePhoto/MainPagePhoto'

function Home() {
  useDocumentTitle('Anjoman Website')
  const [loginRegster, setLoginRegster] = useState('login')
  const [aboutORLogin, setAboutORLogin] = useState('about')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadingTimeOut = setTimeout(() => {
      setLoading(!loading)
    }, 5000)
    return () => {
      clearTimeout(loadingTimeOut)
    }
  }, [])

  const [redering, setredering] = useState(0)

  return (
    <>
      {/* <NavBar setAboutORLogin={setAboutORLogin} aboutORLogin={aboutORLogin} /> */}
      {/* {loading && <Loading />} */}
      <main className="container mt-4 max-h-screen grid-cols-1 lg:grid lg:grid-cols-12 lg:grid-rows-2 ">
        <div className="lg:col-start-5 lg:col-end-13">
          <MainPagePhoto />
        </div>
        <div className=" lg:col-start-1 lg:row-start-1">
          <CalendarPart />
        </div>
        <div className="lg:col-start-1 lg:row-start-2">
          <CalendarFooterPart />
        </div>
        <div className="group flex flex-col items-end   overflow-hidden  lg:col-start-5 lg:col-end-13 lg:row-start-2 ">
          <p> « اخبار مربوط به انجمن »</p>
          <div className="flex flex-row-reverse items-center  w-11/12  gap-3 overflow-hidden overflow-x-scroll  p-10  ">
            <News />
            <News />
            <News />

            <News />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
