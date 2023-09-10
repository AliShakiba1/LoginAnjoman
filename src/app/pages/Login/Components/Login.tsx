import {
  mainLogo,
  uniLoginPic,
} from '../../../../core/values/images-address'

import {
  ArrowSmallRightIcon,
  KeyIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

import { useFormik } from 'formik'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ButtonBlue, ButtonGray } from '../../../Components/Button'
import CopyRight from '../../../Components/CopyRight'
import Input from '../../../Components/Input'
import { loginSchema } from '../../../helper/loginValidation'
import IloginFrom from './Login.types'

const Login = () => {
  const initialValues: IloginFrom = {
    studentId: '',
    password: '',
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
    },
    validationSchema: loginSchema,
  })

  return (
    <div>
      <img src={mainLogo} className=" m-3 mx-auto h-16  " alt="mainLogo" />
      <div className="mt-32 flex flex-col items-center justify-center gap-32 xl:mt-0 xl:flex-row-reverse xl:gap-40 2xl:gap-96">
        <div className=" pt4 rounded-3xl border-2  border-white p-1 ">
          <span className="flex justify-end gap-10 pr-7 pt-4 text-xl text-white">
            {' '}
            ورود به حساب کاربری{' '}
            <Link to={'/'}>
              <ArrowSmallRightIcon className="w-7" />
            </Link>
          </span>

          <form
            className=" flex flex-col gap-2 p-5 pt-6 "
            onSubmit={formik.handleSubmit}
            // onSubmit={formik.submitForm}
          >
            <Input
              label=": شماره دانشجویی"
              placeholder={'... شماره دانشجوی خود را وارد کنید'}
              htmlFor="studentId"
              type="text"
              value={formik.values.studentId}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.studentId && formik.errors.studentId
                  ? formik.errors.studentId
                  : ''
              }
            >
              <UserIcon className="iconIncideInput" />
            </Input>
            <Input
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ''
              }
              label=": رمز عبور"
              placeholder={'... رمز عبور خود را وارد کنید'}
              type="password"
              htmlFor="password"
              inputClassName=""
            >
              <KeyIcon className="iconIncideInput relative" />
              <Link
                to={'/ForgotPassWord'}
                className="simplae-animation absolute bottom-6 left-2 rounded-xl border border-news-Items bg-white p-2 text-xs  text-news-Items hover:bg-news-Items hover:text-white"
              >
                فراموش کرده ام
              </Link>
            </Input>
            <span>
              <ButtonBlue text="ورود" type={'submit'} />
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
          <p
            dir="rtl"
            className=" absolute bottom-20  left-20 hidden w-96 rounded-3xl bg-news-Items p-9 text-right text-white xl:inline"
          >
            دانشــــــــــگاه آزاد اســـــــــــــــلامی
            قوچــــــــــــــــــان؛
            <br></br>
            <q>
              عضو توانمند شبکه آزمایشگاهی فناوری های راهبردی ریاست جمهوری، دارای
              مجوز رسمی از وزارت علوم و تحقیقات و فناوری در زمینه انرژی های نو،
              شیمی، نفت، مهندسی شیمی، گاز، صنایع غذایی و ‌‌‌... تخصص ها با چندین
              سال سابقه فعالیت آماده پذیرش و اسقرار و حمایت از ایده های نوآورانه
              می باشد.
            </q>
          </p>
        </span>
      </div>
      <CopyRight />
    </div>
  )
}

export default memo(Login)
