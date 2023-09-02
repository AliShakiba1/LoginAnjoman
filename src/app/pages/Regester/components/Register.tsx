import {
  mainLogoDark,
  uniLoginPic,
} from '../../../../core/values/images-address'

import {
  AcademicCapIcon,
  ArrowSmallRightIcon,
  ChevronUpDownIcon,
  KeyIcon,
  PhoneIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

import { Listbox, Transition } from '@headlessui/react'
import { Fragment, memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonBlue, ButtonGray } from '../../../Components/Button'
import CopyRight from '../../../Components/CopyRight'
import Input from '../../../Components/Input'

const majors = [
  {
    id: 1,
    major: 'ComputerEn',
    FaMajor: 'مهندسی کامپیوتر',
  },
  {
    id: 2,
    major: 'BiomedicalEn',
    FaMajor: 'مهندسی پزشکی',
  },
]

const Register = ({ setLoginRegster, setAboutORLogin }: any) => {
  const [selected, setSelected] = useState(majors[0])

  return (
    <div className="">
      <img src={mainLogoDark} className=" m-3 mx-auto h-16  " alt="mainLogo" />
      <div className=" flex flex-col items-center justify-center gap-60 xl:mt-0 xl:flex-row-reverse xl:gap-40 2xl:gap-96">
        <div className=" rounded-3xl border-2 border-white  pt-4   sm:w-96">
          <span className="flex justify-end gap-10 pr-7  text-xl text-white">
            {' '}
            ساخت حساب کاربری{' '}
            <Link to={'/'}>
              <ArrowSmallRightIcon className="w-7" />
            </Link>
          </span>

          <form className=" flex flex-col  p-5 pt-6 ">
            <Input
              label=": نام و نام خانوادگی "
              placeholder={'... نام و نام خانوادگی خود را وارد کنید'}
              htmlFor="firstLastName"
              type="text"
            >
              <UserIcon className="iconIncideInput" />
            </Input>
            <label
              htmlFor=""
              className="flex flex-col gap-3 pb-4  text-right text-lg text-white  "
            >
              : رشته تحصیلی
              <Listbox value={selected} onChange={setSelected}>
                <Listbox.Button className="simplae-animation relative rounded-xl bg-white p-3 text-persian-blue-700">
                  {selected.FaMajor}
                  <AcademicCapIcon className="pointer-events-none absolute right-0 top-3 h-7 pl-3 pr-3 text-persian-blue-700 " />
                  <ChevronUpDownIcon className="pointer-events-none absolute left-0 top-3 h-7 pl-3 text-persian-blue-700 " />
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition-all ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="rounded-2xl text-right text-white">
                    {majors.map(major => (
                      <Listbox.Option
                        className="relative cursor-pointer border border-l-0 border-r-0 border-t-0 border-b-gray-50 bg-persian-blue-700 p-2 pr-10"
                        key={major.id}
                        value={major}
                      >
                        {major.FaMajor}
                        <StarIcon className="absolute right-0 top-1 h-7 pr-2" />
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </Listbox>
            </label>
            <Input
              label=": شماره دانشجویی"
              placeholder={'... شماره دانشجوی خود را وارد کنید'}
              htmlFor="studentId"
              type="text"
            >
              <UserIcon className="iconIncideInput" />
            </Input>
            <Input
              label=": شماره همراه"
              placeholder={'... شماره همراه خود را وارد کنید'}
              type="text"
              htmlFor="phoneNumber"
            >
              <PhoneIcon className="iconIncideInput" />
            </Input>
            <Input
              label=": رمز عبور"
              placeholder={'... رمز عبور خود را وارد کنید'}
              type="password"
              htmlFor="password"
            >
              <KeyIcon className="iconIncideInput" />
            </Input>
            <span>
              <ButtonBlue text="ثبت نام" />
              <Link to='/login'>
                <ButtonGray text="ورود" btnBlueClass={` w-32`}>
                  ورود
                </ButtonGray>
              </Link>
            </span>
          </form>
        </div>

        <span className="relative hidden xl:inline">
          <img
            src={uniLoginPic}
            alt="uniLoginPic"
            className="relative hidden xl:inline"
          />
          <q className=" absolute bottom-20  left-20 hidden w-96 rounded-3xl bg-news-Items p-9 text-right text-white xl:inline">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ
          </q>
        </span>
      </div>
      <CopyRight />
    </div>
  )
}

export default memo(Register)
