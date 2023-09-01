import { memo, useEffect, useRef, useState } from 'react'

// import { Calendar, Day, DayValue } from 'react-modern-calendar-datepicker'

import {
  Calendar,
  Day,
  DayValue,
} from '@hassanmojab/react-modern-calendar-datepicker'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'
import './clander.css'

import { ChevronUpDownIcon, UserIcon } from '@heroicons/react/24/outline'

export const Footter = ({ subClassHandler, selectedDay, subClass }: any) => {
  ;<div
    className="-mt-8 mb-4 flex max-h-64 flex-col items-center justify-start
          gap-3  overflow-scroll overflow-x-hidden scroll-smooth rounded-3xl text-base"
    onClick={() => console.log(selectedDay)}
  >
    <span
      className=" relative  flex w-72 items-center justify-between rounded-xl bg-news-Items p-2 sm:w-80"
      onClick={subClassHandler}
    >
      <p>8 صبح</p>
      <div className="  absolute left-10 top-2 h-4 w-44 border-b-2 border-white sm:w-[13.5rem]"></div>
      <ChevronUpDownIcon className="h-7 pr-36 " />
    </span>
    <div className={subClass == true ? '' : 'hidden'}>
      <div className="simplae-animation classDet mb-3 flex w-60 flex-col gap-1 rounded-xl bg-uncertain-Status p-3 shadow-xl hover:w-80">
        <p className="mb-2 flex items-center justify-center gap-3">
          <UserIcon className="h-7" />
          مقدمه نظریه زبان ها و ماشین ها (کلاس 310)
        </p>

        <div className=" flex justify-between">
          <p className=" text-xs text-[#B0B8C0] ">وضعیت کلاس نامشخص</p>
          <p className=" text-xs ">7.30 صبح</p>
        </div>
      </div>
      <div className="simplae-animation classDet mb-3 flex w-60 flex-col gap-1 rounded-xl bg-cancel-Status p-3 hover:w-80">
        <p className="mb-2 flex items-center justify-center gap-3">
          <UserIcon className="h-7" />
          مقدمه نظریه زبان ها و ماشین ها (کلاس 310)
        </p>

        <div className=" flex justify-between">
          <p className=" text-xs text-[#FEC0C0] ">وضعیت کلاس نامشخص</p>
          <p className=" text-xs ">7.30 صبح</p>
        </div>
      </div>
      <div className="simplae-animation classDet mb-3 flex w-60 flex-col gap-1 rounded-xl bg-ongoing-Status p-3 hover:w-80">
        <p className="mb-2 flex items-center justify-center gap-3">
          <UserIcon className="h-7" />
          مقدمه نظریه زبان ها و ماشین ها (کلاس 310)
        </p>

        <div className=" flex justify-between">
          <p className=" text-xs text-[#C0E8D8] ">وضعیت کلاس نامشخص</p>
          <p className=" text-xs ">7.30 صبح</p>
        </div>
      </div>
    </div>
    <span
      className=" relative   flex w-72  items-center justify-between rounded-xl bg-white p-2 text-news-Items sm:w-80"
      onClick={subClassHandler}
    >
      <p>10 صبح</p>
      <div className="  absolute  left-10 top-2 h-4 w-44 border-b-2 border-news-Items sm:w-[13.5rem]"></div>
      <ChevronUpDownIcon className="h-7 pr-36 " />
    </span>
  </div>
}
const CalendarPart = () => {
  const date = new Date().toLocaleDateString('fa-IR').split('/')
  // trun now time to jalili
  const p2e = (s: any) =>
    +s.replace(/[۰-۹]/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  const nowTime = {
    year: p2e(date[0]),
    month: p2e(date[1]),
    day: p2e(date[2]),
  }

  const disabledDays = [
    {
      year: 1402,
      month: 6,
      day: 24,
    },
    {
      year: 1402,
      month: 6,
      day: 7,
    },
    {
      year: 1402,
      month: 7,
      day: 7,
    },
    {
      year: 1402,
      month: 6,
      day: 16,
    },
    {
      year: 1402,
      month: 6,
      day: 13,
    },
  ]

  
  const [selectedDay, setSelectedDay] = useState<DayValue>(nowTime)
  const [subClass, setsubClass] = useState(false)
  
  useEffect(() => {console.log(selectedDay)}, [selectedDay])
  const subClassHandler = () => {
    setsubClass(!subClass)
  }

  return (
    <aside
      className=" container relative mx-auto flex items-center justify-center lg:block  "
      onClick={() => {
        // console.log(selectedDay)
      }}
    >
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        disabledDays={disabledDays}
        shouldHighlightWeekends={true}
        colorPrimary="#3C6382"
        colorPrimaryLight="#9DB0C0"
        locale="fa"
        calendarClassName="custom-calendar sm:!w-[38em]   "
        calendarTodayClassName="custom-today-day"
        slideAnimationDuration="0.6s"
      />
      <div
        className="absolute top-0  z-20 flex h-[2.75rem] w-[20.68rem] items-center  justify-end rounded-t-lg bg-headLine pr-6 shadow-lg
        sm:w-[23.75rem] "
      >
        <p>« تقویم و مدیریت کلاس ها »</p>
      </div>
    </aside>
  )
}

export default CalendarPart
