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

import { ArrowPathIcon } from '@heroicons/react/24/outline'
import CalendarPart from '../../Components/Calendar/CalendarPart'
import News from '../../Components/News/News'

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
      <main className="container mx-auto mt-4 flex flex-col">
        <CalendarPart />

        <News />
      </main>
    </>
  )
}

export default Home
