import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { Suspense, lazy } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import CalendarPart from '../app/Components/Calendar/CalendarPart'
// import Page404 from '../app/pages/404/Page404'
// import Login from '../app/pages/Login/Components/Login'
// import AboutUs from '../app/pages/aboutUs/Components/AboutUs'
// import Home from '../app/pages/home/Home'
// import NavBar from '../app/pages/navbar/components/NavBar'

const NavBar = lazy(() => import('../app/pages/navbar/components/NavBar'))
const AboutUs = lazy(() => import('../app/pages/aboutUs/Components/AboutUs'))
const Home = lazy(() => import('../app/pages/home/Home'))
const Page404 = lazy(() => import('../app/pages/404/Page404'))
const Login = lazy(() => import('../app/pages/Login/Components/Login'))

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<NavBar />} errorElement={<Page404 />}>
      <Route index element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Route>,
    <Route path="/login" element={<Login />} />,
  ]),
)

function MainPage() {
  return (
    <>
      <Suspense fallback={<ArrowPathIcon className="w-32 animate-spin mx-auto h-screen" />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default MainPage
