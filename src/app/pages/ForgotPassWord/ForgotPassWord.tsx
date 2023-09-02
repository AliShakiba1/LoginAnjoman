import { ArrowSmallRightIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { memo } from 'react'
import { mainLogoDark, uniLoginPic } from '../../../core/values/images-address'

import CopyRight from '../../Components/CopyRight'

import { Link } from 'react-router-dom'
import { ButtonBlue, ButtonGray } from '../../Components/Button'
import Input from '../../Components/Input'

function ForgotPassWord() {
  return (
    <div>
      <img src={mainLogoDark} className=" m-3 mx-auto h-16  " alt="mainLogo" />
      <div className="mt-32 flex flex-col items-center justify-center gap-32 xl:mt-0 xl:flex-row-reverse xl:gap-40 2xl:gap-96">
        <div className=" pt4 rounded-3xl border-2  border-white p-1 ">
          <span className="flex justify-end gap-10 pr-7 pt-4 text-xl text-white">
            {' '}
            بازیابی رمز عبور{' '}
            <Link to={'/login'}>
              <ArrowSmallRightIcon className="w-7" />
            </Link>
          </span>

          <form className=" flex flex-col gap-2 p-5 pt-6 ">
            <Input
              label=": شماره تلفن"
              placeholder={'... شماره تلفن خود را وارد کنید'}
              htmlFor="studentId"
              type="text"
            >
              <PhoneIcon className="iconIncideInput" />
            </Input>

            <span>
              <ButtonBlue text="ارسال" />

              <ButtonGray
                text="ساخت پروفایل کاربری"
                btnBlueClass="opacity-0"
                disabled={true}
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

export default memo(ForgotPassWord)
