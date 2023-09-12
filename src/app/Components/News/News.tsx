import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ClockIcon,
  CloudIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { memo } from 'react'
import dummyPic from './imgtest.png'

const dummyData = {
  header: 'سال نو مبارک',
  contet:
    'فرا رسیدن ایام نوروز و سال جدید رو به همه دانشجویان و اساتید تبریک عرض می‌کنیم.امید داریم سال پیش‌رو برای یکایک شما عزیزان سالی پرخیر و برکت، سرشار از شادی و توام با موفقیت باشد.',
  pic: dummyPic,
  time: '1401/01/01',
  writer: 'علی شکیبای',
  tag: 'دانشجویان،اساتید و اعضاء دانشگاه',
}

const News = () => {
  return (
    <>
      <article className="container mx-0 h-80 p-3  ">
        <div className="flex h-10 items-baseline justify-between rounded-t-xl  bg-headLine p-2 px-3 text-white">
          <p className="text-xs">ادامه مطلب</p>
          {dummyData.header}
        </div>
        <img
          src={dummyData.pic}
          alt="picture of news"
          className="max-h-40 min-w-full rounded-none "
        />

        <div className=" max-h-32  overflow-hidden overflow-ellipsis whitespace-pre-line    rounded-b-xl bg-white p-3 text-right text-black  ">
          <div className="mx-2  mb-2 flex flex-row-reverse justify-between gap-2 ">
            <p className="flex  flex-row-reverse items-center gap-0.5 rounded-md bg-news-Items px-1.5 text-xs text-white ">
              <UserIcon className="w-7" /> {dummyData.writer}
            </p>
            <p className="flex flex-row-reverse  items-center gap-0.5 rounded-md bg-news-Items px-1.5 text-xs text-white ">
              <ClockIcon className="w-7" /> {dummyData.time}
            </p>
          </div>
          {dummyData.contet}
        </div>
      </article>
    </>
  )
}

export default memo(News)
