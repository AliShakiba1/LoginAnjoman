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

import CalendarPart from '../../Components/Calendar/CalendarPart'
import News from '../../Components/News/News'

function Home() {
  useDocumentTitle('Anjoman Website')
  const [loginRegster, setLoginRegster] = useState('login')
  const [loading, setLoading] = useState(true)
  const [aboutORLogin, setAboutORLogin] = useState('about')

  useEffect(() => {
    const loadingTimeOut = setTimeout(() => {
      setLoading(!loading)
    }, 5000)
    return () => {
      clearTimeout(loadingTimeOut)
    }
  }, [])

  const witchPage =
    loginRegster == 'login' ? (
      <Login
        setLoginRegster={setLoginRegster}
        setAboutORLogin={setAboutORLogin}
      />
    ) : (
      <Register
        setLoginRegster={setLoginRegster}
        setAboutORLogin={setAboutORLogin}
      />
    )

  const aboutORLoginPage = aboutORLogin == 'about' ? <AboutUs /> : witchPage
  const [redering, setredering] = useState(0)

  return (
    <>
      <NavBar setAboutORLogin={setAboutORLogin} aboutORLogin={aboutORLogin} />
      <main className="container mx-auto mt-4 flex flex-col">
        <CalendarPart />
        <News />
      </main>
    </>
  )
}

export default Home
