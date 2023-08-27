import {
  BellAlertIcon,
  Cog6ToothIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { mainLogo, mainLogoDark } from '../../../../core/values/images-address'
import NavButton from '../../../Components/NavButton'

function NavBar(props: any) {
  return (
    <>
      <nav
        className={`container mt-3 flex items-center justify-between  border-b-4 pb-3 lg:pb-0  ${
          props.aboutORLogin == 'about' ? 'block' : 'hidden'
        }`}
      >
        <div className="flex gap-3">
          <UserIcon
            className="icon "
            onClick={() => props.setAboutORLogin('abouta')}
          />
          <BellAlertIcon className="icon " />
          <Cog6ToothIcon className="icon hidden lg:block" />
        </div>
        <img src={mainLogoDark} alt="" className="h-[3.25rem] lg:hidden" />
        <EllipsisVerticalIcon className="icon lg:hidden " />
        <ul className="mt-3 lg:flex flex-row-reverse  hidden">
        <img
          src={mainLogoDark}
          alt=""
          className="hidden h-[3.25rem] pl-8 lg:block"
        />
          <NavButton text={'خانه'} />
          <NavButton text={'درس ها'} bulletClass={'!left-10'} />
          <NavButton bulletClass={'!left-14'} text={'گپ و گفتگو'} />
          <NavButton bulletClass={'!left-10'} text={'درباره ما'} />
        </ul>
      </nav>
    </>
  )
}

export default NavBar
