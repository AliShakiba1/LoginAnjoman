import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from '@material-tailwind/react'
import {
  BulletAllert,
  ellipsisVertical,
  mainLogoDark,
  userLogoDark,
  userLogoWhaite,
} from '../../../../core/values/images-adderes'

function NavBar() {
  return (
    <>
      <Navbar className="mx-auto flex justify-between border-none bg-persian-blue-dark ">
        <div className=" flex">
          <span className=" hidden items-center bg-white text-black sm:flex">
            <p className="pr-2">مهمان</p>
            <Button className="mr-3 rounded-full bg-persian-blue-900 p-3">
              <img src={userLogoDark} alt="" />
            </Button>
          </span>
          <Button className="mr-3 rounded-full bg-white p-3 sm:hidden">
            <img src={userLogoWhaite} alt="" />
          </Button>
          <Button className="rounded-full bg-white p-3">
            <img src={BulletAllert} alt="" />
          </Button>
        </div>

        <img src={mainLogoDark} alt="mainlogo" className="mt-1 h-11 w-11 " />
        <Button className="mr-3 rounded-full bg-white p-3">
          <img src={ellipsisVertical} alt="" />
        </Button>
      </Navbar>
    </>
  )
}

export default NavBar
