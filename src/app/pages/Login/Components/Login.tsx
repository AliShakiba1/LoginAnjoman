import {
  mainLogoDark,
  uniLoginPic,
} from '../../../../core/values/images-address'

import {
  ArrowSmallRightIcon,
  KeyIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'
import { ButtonBlue, ButtonGray } from '../../../Components/Button'
import CopyRight from '../../../Components/CopyRight'
import Input from '../../../Components/Input'
import { memo } from 'react'

const Login = () => {
  return (
    <div>
      <img src={mainLogoDark} className=" m-3 mx-auto h-16  " alt="mainLogo" />
      <div className="mt-32 flex flex-col items-center justify-center gap-32 xl:mt-0 xl:flex-row-reverse xl:gap-40 2xl:gap-96">
        <div className=" pt4 rounded-3xl border-2  border-white p-1 ">
          <span className="flex justify-end gap-10 pr-7 pt-4 text-xl text-white">
            {' '}
            ورود به حساب کاربری{' '}
            <Link to={'/'}>
              <ArrowSmallRightIcon className="w-7" />
            </Link>
          </span>

          <form className=" flex flex-col gap-2 p-5 pt-6 ">
            <Input
              label=": شماره دانشجویی"
              placeholder={'... شماره دانشجوی خود را وارد کنید'}
              htmlFor="studentId"
              type="text"
            >
              <UserIcon className="iconIncideInput" />
            </Input>
            <Input
              label=": رمز عبور"
              placeholder={'... رمز عبور خود را وارد کنید'}
              type="password"
              htmlFor="password"
              inputClassName=""
            >
              <KeyIcon className="iconIncideInput relative" />
              <Link
                to={'/ForgotPassWord'}
                className="simplae-animation absolute bottom-5 left-2 rounded-xl border border-news-Items bg-white p-3 text-xs  text-news-Items hover:bg-news-Items hover:text-white"
              >
                فراموش کرده ام
              </Link>
            </Input>
            <span>
              <ButtonBlue text="ورود" />
              <Link to={'/Register'}>
                <ButtonGray text="ساخت پروفایل کاربری">
                  ساخت پروفایل کاربری
                </ButtonGray>
              </Link>
            </span>
          </form>
        </div>
        <span className="relative">
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

export default memo(Login)
