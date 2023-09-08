import { ChevronUpDownIcon, UserIcon } from '@heroicons/react/24/outline'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { memo } from 'react'
import CalendarEachClass from './CalendarEachClass'

const CalendarFooterPart = () => {
  return (
    <div className=" CalendarFooterPart container mt-2 flex w-80 flex-col items-center justify-start gap-3 rounded-2xl bg-white p-0 text-base  sm:w-96  ">
      <div className="  flex w-full items-center justify-end  rounded-t-lg bg-headLine p-3  shadow-lg">
        « مدیریت کلاس ها »
      </div>
      <Accordion type="single" collapsible className="space-y-3 ">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" relative  flex w-72 items-center justify-between rounded-xl    p-3 sm:w-80">
            <div className="  absolute left-12 top-2 h-4 w-44 border-b-2 border-white lg:w-52"></div>
            <p>8 صبح</p>
          </AccordionTrigger>
          <AccordionContent className=" max-h-60   overflow-scroll">
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className=" relative  flex w-72 items-center justify-between rounded-xl    p-3 sm:w-80">
            <div className="  absolute left-12 top-2 h-4 w-44  border-b-2 border-white lg:w-52"></div>
            <p>10 صبح</p>
          </AccordionTrigger>
          <AccordionContent className=" max-h-60   overflow-scroll">
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className=" relative  flex w-72 items-center justify-between rounded-xl    p-3 sm:w-80">
            <div className="  absolute left-12 top-2 h-4 w-44 border-b-2 border-white lg:w-52"></div>
            <p>13 عصر</p>
          </AccordionTrigger>
          <AccordionContent className=" max-h-60   overflow-scroll">
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className=" relative  flex w-72 items-center justify-between rounded-xl    p-3 sm:w-80">
            <div className="  absolute left-12 top-2 h-4 w-44 border-b-2 border-white lg:w-52"></div>
            <p>15 عصر</p>
          </AccordionTrigger>
          <AccordionContent className=" max-h-60   overflow-scroll">
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
            <CalendarEachClass />
          </AccordionContent>
        </AccordionItem>
      
      </Accordion>
    </div>
  )
}
export default memo(CalendarFooterPart)
