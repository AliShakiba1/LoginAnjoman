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
import CalendarFooterPart from './CalendarFooterPart'

const CalendarPart = () => {
  const date = new Date().toLocaleDateString('fa-IR').split('/')
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
      day: 17,
    },
    {
      year: 1402,
      month: 6,
      day: 13,
    },
  ]

  const [selectedDay, setSelectedDay] = useState<DayValue>(nowTime)

  useEffect(() => {
    const sendHttp = setTimeout(() => {
      console.log(selectedDay)
    }, 4000)

    return () => {
      clearTimeout(sendHttp)
    }
  }, [selectedDay])

  return (
    <aside className="container flex  flex-col items-center justify-center p-0 lg:items-start">
      <aside className="  relative flex items-center justify-center p-0 shadow-none   ">
        <Calendar
          value={selectedDay}
          onChange={setSelectedDay}
          disabledDays={disabledDays}
          shouldHighlightWeekends={true}
          colorPrimary="#3C6382"
          colorPrimaryLight="#9DB0C0"
          locale="fa"
          calendarClassName="custom-calendar sm:!w-[38em]  shadow-none "
          calendarTodayClassName="custom-today-day shadow-none"
          slideAnimationDuration="0.6s"
        />
        <div
          className="absolute top-0  flex h-[2.75rem] w-[20.68rem] items-center  justify-end rounded-t-lg bg-headLine pr-6 shadow-lg
        sm:w-[23.75rem] "
        >
          <p>« تقویم »</p>
        </div>
      </aside>
    </aside>
  )
}

export default CalendarPart
