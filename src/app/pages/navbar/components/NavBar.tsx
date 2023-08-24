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
        className={`container mt-3 flex items-center justify-between  border-b-4   ${
          props.aboutORLogin == 'about' ? 'block' : 'hidden'
        }`}
      >
        <div className="flex gap-3">
          <UserIcon
            className="icon "
            onClick={() => props.setAboutORLogin('abouta')}
          />
          <BellAlertIcon className="icon " />
          <Cog6ToothIcon className="icon hidden md:block" />
        </div>
        <img src={mainLogoDark} alt="" className="h-[3.25rem] md:hidden" />
        <EllipsisVerticalIcon className="icon md:hidden " />
        <div className="mt-3 flex flex-row-reverse ">
          <NavButton text={'خانه'} />
          <NavButton text={'درس ها'} bulletClass={'!left-10'} />
          <NavButton bulletClass={'!left-14'} text={'گپ و گفتگو'} />
          <NavButton bulletClass={'!left-10'} text={'درباره ما'} />
        </div>
        <img
          src={mainLogoDark}
          alt=""
          className="hidden h-[3.25rem] md:block"
        />
      </nav>
    </>
  )
}

export default NavBar
