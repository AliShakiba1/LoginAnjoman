import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import CalendarPart from '../app/Components/Calendar/CalendarPart'
import Login from '../app/pages/Login/Components/Login'
import AboutUs from '../app/pages/aboutUs/Components/AboutUs'
import NavBar from '../app/pages/navbar/components/NavBar'
import Home from '../app/pages/home/Home'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Route>,
    <Route path="/login" element={<Login />} />,
  ]),
)

function MainPage() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default MainPage
