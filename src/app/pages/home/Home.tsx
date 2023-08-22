// import { Button } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import useDocumentTitle from '../../../core/utils/useDocumentTitle'
// import { mainLogo } from '../../../core/values/images-adderes'
import Login from '../Login/Components/Login'
import Register from '../Regester/components/Register'
// import NavBar from '../navbar/components/navbar'

import Loading from '../Loading/Components/Loading'
import './styles/App.css'

function Home() {
  useDocumentTitle('Anjoman Website')
  const [loginRegster, setLoginRegster] = useState('login')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loading = setTimeout(() => {
      setLoading(false)
    }, 7000)
    return () => {
      clearTimeout(loading)
    }
  }, [])

  return (
    <>
      {/* <NavBar /> */}
      {/* <Login/> */}
      {loading === true ? <Loading /> : null}
      {loginRegster == 'login' ? (
        <Login setLoginRegster={setLoginRegster} />
      ) : (
        <Register setLoginRegster={setLoginRegster} />
      )}
    </>
  )
}

export default Home
