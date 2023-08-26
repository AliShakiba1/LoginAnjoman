import { useState } from 'react'

import { Calendar, Day, DayValue } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import './clander.css'

import { ChevronUpDownIcon, UserIcon } from '@heroicons/react/24/outline'

const Main = () => {
  const date = new Date()
  // trun now time to jalili
  const nowTime = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
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

  const [selectedDay, setSelectedDay] = useState<DayValue>()
  const [subClass, setsubClass] = useState(false)

  const subClassHandler = () => {
    setsubClass(!subClass)
  }

  return (
    <div className="container relative mt-5 flex justify-center ">
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        disabledDays={disabledDays}
        shouldHighlightWeekends={true}
        colorPrimary="#3C6382"
        colorPrimaryLight="#9DB0C0"
        locale="fa"
        calendarClassName="custom-calendar   "
        calendarTodayClassName="custom-today-day"
        slideAnimationDuration="0.6s"
        renderFooter={() => (
          <div
            className="-mt-8 mb-4 flex max-h-64 flex-col items-center justify-start
          gap-3  overflow-scroll overflow-x-hidden scroll-smooth rounded-3xl text-base"
          >
            <span
              className=" relative  flex w-72 items-center justify-between rounded-xl bg-news-Items p-2"
              onClick={subClassHandler}
            >
              <p>8 صبح</p>
              <div className="  absolute left-10 top-2 h-4 w-44 border-b-2 border-white"></div>
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
              className=" relative   flex w-72 items-center justify-between rounded-xl bg-white p-2 text-news-Items"
              onClick={subClassHandler}
            >
              <p>10 صبح</p>
              <div className="  absolute  left-10 top-2 h-4 w-44 border-b-2 border-news-Items"></div>
              <ChevronUpDownIcon className="h-7 pr-36 " />
            </span>

            <span className=" relative   flex w-72 items-center justify-between rounded-xl bg-white p-2 text-news-Items">
              <p>13 عصر</p>
              <div className="  absolute  left-10 top-2 h-4 w-44 border-b-2 border-news-Items"></div>
              <ChevronUpDownIcon className="h-7 pr-36 " />
            </span>
            <span
              onClick={subClassHandler}
              className=" relative   flex w-72 items-center justify-between rounded-xl bg-white p-2 text-news-Items"
            >
              <p>15 عصر</p>
              <div className="  absolute  left-10 top-2 h-4 w-44 border-b-2 border-news-Items"></div>
              <ChevronUpDownIcon className="h-7 pr-36 " />
            </span>
            <div className={subClass == true ? '' : 'hidden'}>
              <div className="w-52 bg-black">s</div>
              <div className="w-52 bg-black">s</div>
              <div className="w-52 bg-black">s</div>
              <div className="w-52 bg-black">s</div>
              <div className="w-52 bg-black">s</div>
              <div className="w-52 bg-black">s</div>
            </div>
            <span className=" relative   flex w-72 items-center justify-between rounded-xl bg-white p-2 text-news-Items">
              <p>17 عصر</p>
              <div className="  absolute  left-10 top-2 h-4 w-44 border-b-2 border-news-Items"></div>
              <ChevronUpDownIcon className="h-7 pr-36 " />
            </span>
          </div>
        )}
      />
      <div
        className="absolute top-0  z-20 flex h-[2.75rem] w-[20.68rem] items-center justify-end overflow-hidden rounded-t-lg bg-headLine pr-6 shadow-lg"
        onClick={() => {
          console.log(selectedDay)
        }}
      >
        <p>« تقویم و مدیریت کلاس ها »</p>
      </div>
    </div>
  )
}

export default Main
