import {
  ArrowSmallRightIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentIcon,
  KeyIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import {
  collaborationVector,
  youWantKnowMoreVector,
} from '../../../../core/values/images-address'
import { ButtonBlue, ButtonGray } from '../../../Components/Button'
import CopyRight from '../../../Components/CopyRight'
import Input from '../../../Components/Input'
import member from '../member.png'

function AboutUs(props:any) {
  return (
    <div className="container mx-auto  p-4 text-right">
      <h1 className="mb-3 text-lg">“چطور شد که این پلتفرم ایجاد شد” </h1>
      <h3 className="mb-3 text-[#AEAEAE] ">
        ما دو نفر بودیم که یک درخواست ساده از استاد خود در دانشکده دریافت کردیم.
        باید یک برنامه برای انجمن دانشکده ایجاد کنیم. در یک روز، در اتاق انجمن،
        با دوستم فکر کردیم و با همکاری، ایده‌های جذاب و خلاقانه‌ای برای این طرح
        پیشنهاد دادیم. سپس با دیگر اعضای انجمن ارتباط گرفتیم و یک گروه عمل گرایی
        تشکیل دادیم تا با تلاش مشترک، محصولی را تولید کنیم.{' '}
      </h3>
      <h3 className="mb-3 text-[#AEAEAE] ">
        در طول تولید محصول، با مشکلاتی مواجه شدیم که با مشورت اساتید دانشگاه و
        دیگر دوستانمان، آنها را برطرف کردیم. به همین ترتیب، یاورگرایی و
        تفکرگرایی نیز وارد عمل شدند و به ما کمک کردند تا محصول خود را با دقت و
        بهبود بیشتری تولید کنیم.
      </h3>
      <img
        src={youWantKnowMoreVector}
        alt="youWantKnowMoreVector"
        className="-ml-5 w-60"
      />
      <h2 className="mb-3 text-lg">“اعضای انجمن”</h2>
      <img src={member} loading="lazy" alt="" />
      <h2 className="mb-3 text-lg">“همکاری با ما”</h2>
      <h3 className="text-[#AEAEAE]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم
        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با
        تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی
        نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
        صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
        ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن
        ساختگی با تولید سادگی نامفهوم از صنعت چاپ .
      </h3>
      <div className="mb-9 mt-20 flex flex-col items-center justify-between lg:flex-row-reverse">
        <div className=" hover:lg:w-[30rem]lg:w-[30rem] w-96  rounded-3xl border-2 border-white pt-4 transition-all duration-700 ease-in-out  hover:w-[30rem]">
          <span className="flex items-center justify-center   text-xl text-white">
            {' '}
            “فرم درخواست همکاری”
          </span>
          <form className=" flex flex-col gap-2 p-8 pt-6  ">
            <Input
              label=": نام و نام خانوادگی "
              placeholder={'... شماره دانشجوی خود را وارد کنید'}
              htmlFor="Fname"
              type="text"
            >
              <UserIcon className="iconIncideInput" />
            </Input>
            <Input
              label=": تلفن همراه"
              placeholder={'+98'}
              // value="+98"
              type="phoneNUmber"
              htmlFor="phoneNUmber"
            >
              <PhoneIcon className="iconIncideInput relative" />
            </Input>
            <Input
              label=": ضمینه فعالیت "
              placeholder={'... رمز عبور خود را وارد کنید'}
              type="phoneNUmber"
              htmlFor="phoneNUmber"
              inputClassName=""
            >
              <ChatBubbleLeftEllipsisIcon className="iconIncideInput relative" />
            </Input>
            <Input
              label=": ضمینه فعالیت "
              placeholder={'... فایل رزومه خود را برای ما ارسال کنید'}
              type="phoneNUmber"
              htmlFor="phoneNUmber"
              inputClassName=""
            >
              <DocumentIcon className="iconIncideInput relative" />
            </Input>
            <ButtonBlue
              text="ثبت نظر"
              btnBlueClass="bg-btn-gray-low mt-0    "
            />
          </form>
        </div>
        <img
          src={collaborationVector}
          alt="collaborationVector"
          className="hidden w-[27rem] lg:block"
        />
      </div>
      <CopyRight />
    </div>
  )
}

export default AboutUs
