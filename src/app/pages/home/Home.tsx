// import { Button } from '@material-tailwind/react'
import { useState } from 'react'
import useDocumentTitle from '../../../core/utils/useDocumentTitle'
// import { mainLogo } from '../../../core/values/images-adderes'
import Login from '../Login/Components/Login'
import Register from '../Regester/components/Register'
// import NavBar from '../navbar/components/navbar'

import './styles/App.css'

function Home() {
  useDocumentTitle('Anjoman Website')
  const [loginRegster, setLoginRegster] = useState('login')
  return (
    <>
      {/* <NavBar /> */}
      {/* <Login/> */}
      {loginRegster == 'login' ? (
        <Login setLoginRegster={setLoginRegster} />
      ) : (
        <Register setLoginRegster={setLoginRegster} />
      )}
    </>
  )
}

export default Home
