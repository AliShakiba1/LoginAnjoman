import {
  mainLogoDark,
  uniLoginPic,
} from '../../../../core/values/images-address'

import {

  ArrowSmallRightIcon,
 
} from '@heroicons/react/24/outline'

import { memo  } from 'react'
import { Link } from 'react-router-dom'

import CopyRight from '../../../Components/CopyRight'

import { Formik } from 'formik'
import FormComponents from './FormComponents'
import { IRegisterFrom } from './Register.types'
import { registerSchema } from '../../../helper/loginValidation'


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


const Register = () => {
  const initialValues: IRegisterFrom = {
    major: {},
    studentId: '',
    password: '',
    Fname: '',
    phoneNumber: '',
  }

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

          <Formik
            initialValues={initialValues}
            onSubmit={v => console.log(JSON.stringify(v, null, 2))}
            validationSchema={registerSchema}
          >
            {formik => <FormComponents formik={formik} majors={majors} />}
          </Formik>
        </div>

        <span className="relative hidden xl:inline">
          <img
            src={uniLoginPic}
            alt="uniLoginPic"
            className="relative hidden xl:inline"
          />
          <q className=" absolute bottom-20  left-20 hidden w-96 rounded-3xl bg-news-Items p-9 text-right text-white xl:inline">
            دانشــــــــــگاه آزاد اســـــــــــــــلامی
            قوچــــــــــــــــــان؛ عضو توانمند شبکه آزمایشگاهی فناوری های
            راهبردی ریاست جمهوری، دارای مجوز رسمی از وزارت علوم و تحقیقات و
            فناوری در زمینه انرژی های نو، شیمی، نفت، مهندسی شیمی، گاز، صنایع
            غذایی و ‌‌‌... تخصص ها با چندین سال سابقه فعالیت آماده پذیرش و
            اسقرار و حمایت از ایده های نوآورانه می باشد.
          </q>
        </span>
      </div>
      <CopyRight />
    </div>
  )
}

export default memo(Register)
