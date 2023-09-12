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
import './styles/App.css'

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
      <main className="container  mt-4 grid  max-h-screen lg:grid-cols-4 xl:grid-cols-12 xl:grid-rows-6 ">
        <div className="lg:col-span-4 lg:col-start-1 xl:col-start-5 xl:col-end-13  xl:row-start-1 xl:row-end-3">
          <MainPagePhoto />
        </div>
        <div className=" lg:col-span-2 lg:col-start-1 lg:ml-3 xl:col-start-1 xl:col-end-4 xl:row-start-1 xl:row-end-3 xl:ml-0">
          <CalendarPart />
        </div>
        <div className="lg:col-span-4 lg:col-start-3 xl:col-start-1 xl:col-end-4 xl:row-start-4 xl:row-end-5 xl:mt-10">
          <CalendarFooterPart />
        </div>
        <div className="lg:col-start-4 xl:col-span-2 xl:col-start-11 xl:row-start-4 xl:mt-10">
          <p className='text-right mt-3 lg:mt-0'> « اخبار مربوط به انجمن »</p>
        </div>
        <div className="flex flex-row-reverse overflow-x-scroll lg:col-span-4 lg:col-start-1 xl:col-start-5 xl:col-end-13 xl:row-span-2 xl:row-start-5 xl:-mt-16 ">
          <News />
          <News />
          <News />
          <News />
        </div>
      </main>
    </>
  )
}

export default Home
