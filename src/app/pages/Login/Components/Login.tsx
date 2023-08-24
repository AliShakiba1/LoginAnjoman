import { SubmitHandler, useForm } from 'react-hook-form'
import {
  mainLogoDark,
  uniLoginPic,
} from '../../../../core/values/images-address'

import {
  ArrowSmallRightIcon,
  KeyIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

import { ButtonBlue, ButtonGray } from '../../../Components/Button'
import Input from '../../../Components/Input'

type FormData = {
  studentId: string
  password: string
}

const Login = ({ setLoginRegster,setAboutORLogin }: any) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = handleSubmit(data =>
    console.log(data),
  )

  return (
    <div className="">
      <img src={mainLogoDark} className=" m-3 mx-auto h-16  " alt="mainLogo" />
      <div className="mt-32 flex flex-col items-center justify-center gap-32 xl:mt-0 xl:flex-row-reverse xl:gap-40 2xl:gap-96">
        <div className=" rounded-3xl border-2 border-white  pt-4  ">
          <span className="flex justify-end gap-10 pr-7  text-xl text-white">
            {' '}
            ورود به حساب کاربری{' '}
            <ArrowSmallRightIcon
              className="w-7"
              onClick={() => setAboutORLogin('about')}
            />
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
              <button className="simplae-animation absolute bottom-6 left-3 rounded-xl border border-persian-blue-800 bg-white p-3 text-xs  text-persian-blue-800 hover:bg-persian-blue-800 hover:text-white">
                فراموش کرده ام
              </button>
            </Input>
            <span>
              <ButtonBlue text="ورود" />
              <ButtonGray
                onClick={() => setLoginRegster('Register')}
                text="ساخت پروفایل کاربری"
              >
                ساخت پروفایل کاربری
              </ButtonGray>
            </span>
          </form>
        </div>
        <span className="relative">
          <img
            src={uniLoginPic}
            alt="uniLoginPic"
            className="relative hidden xl:inline"
          />
          <q className=" absolute bottom-20  left-20 hidden w-96 rounded-3xl bg-persian-blue-800 p-9 text-right text-white xl:inline">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با
            تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ
          </q>
        </span>
      </div>
      <div className=" mt-26 m-6 mx-auto text-center  text-sm text-white xl:mt-9">
        توسعه یافته توسط
        <a href="" className="text-loghman">
          {' '}
          گروه نرم افزار لقمان©
        </a>
      </div>
    </div>
  )
}

export default Login
