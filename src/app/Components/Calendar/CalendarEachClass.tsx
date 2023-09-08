import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserIcon } from '@heroicons/react/24/outline'
import { memo } from 'react'

function CalendarEachClass(props: any) {
  const { img, timeClass, nameClass } = props

  const condition = 'undefined'

  const conditions = {
    undefined: 'bg-uncertain-Status',
    cancel: 'bg-cancel-Status',
    ok: 'bg-ongoing-Status',
  }
  

  return (
    <div className="mt-2 flex flex-col items-end pr-1">
      <div
        className={`simplae-animation classDet mb-3 flex w-60 flex-col gap-1 rounded-xl  p-3 shadow-xl hover:w-[17rem] lg:hover:w-[19rem] ${conditions[condition]}`}
      >
        <p className="mb-2 flex items-center justify-center gap-3 text-right">
          مقدمه نظریه زبان ها و ماشین ها (کلاس 310)
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </p>
        <div className=" flex justify-between">
          <p className=" text-xs ">7.30 صبح</p>
          <p className=" text-xs text-white ">وضعیت کلاس نامشخص</p>
        </div>
      </div>
    </div>
  )
}

export default memo(CalendarEachClass)
