// import { Button } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import useDocumentTitle from '../../../core/utils/useDocumentTitle'
// import { mainLogo } from '../../../core/values/images-address'
import Login from '../Login/Components/Login'
import Register from '../Regester/components/Register'
// import NavBar from '../navbar/components/navbar'

import Loading from '../Loading/Components/Loading'
import AboutUs from '../aboutUs/Components/AboutUs'
import NavBar from '../navbar/components/NavBar'
import './styles/App.css'

function Home() {
  useDocumentTitle('Anjoman Website')
  const [loginRegster, setLoginRegster] = useState('login')
  const [loading, setLoading] = useState(true)
  const [aboutORLogin, setAboutORLogin] = useState('abouta')

  useEffect(() => {
    const loadingTimeOut = setTimeout(() => {
      setLoading(!loading)
    }, 1000)
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

  const aboutORLoginPage =
    aboutORLogin == 'about' ? (
      <AboutUs  />
    ) : (
      witchPage
    )

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <NavBar setAboutORLogin={setAboutORLogin} aboutORLogin={aboutORLogin} />
      )}
      {!loading && aboutORLoginPage}
    </>
  )
}

export default Home
