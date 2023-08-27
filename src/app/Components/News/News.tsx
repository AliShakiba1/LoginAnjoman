import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ClockIcon,
  CloudIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import dummyPic from './nwesTest.png'

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
      <article className="m-12 grid h-[15rem] w-[23rem] grid-cols-5 grid-rows-6 rounded-2xl bg-news-Items p-3 text-right shadow-xl sm:w-[26rem]">
        <h1 className=" col-start-4 col-end-6  row-start-1 row-end-2 max-h-3">
          {dummyData.header}
        </h1>
        <h3 className="  col-start-4 col-end-6 row-start-2 row-end-5 text-xs">
          {dummyData.contet}
        </h3>
        <img
          className="  col-span-4 col-start-1 row-span-3 row-start-1 -translate-x-7 -translate-y-8 "
          src={dummyData.pic}
          alt="article Picture"
        />
        <h5 className=" col-start-3 col-end-6 mt-12 self-center rounded-lg bg-white p-2 text-xs text-black ">
          {dummyData.tag}
        </h5>
        <div className=" col-span-3 col-start-1 row-start-4 row-end-5 flex gap-2 ">
          <h4 className=" centering self-center rounded-lg bg-white  p-2 text-xs  text-black">
            {dummyData.time}
            <CalendarDaysIcon className="h-5 pl-0.5 " />
          </h4>
          <h4 className=" centering self-center rounded-lg bg-white  p-2 text-xs  text-black ">
            {dummyData.writer}
            <UserIcon className="h-5 pl-0.5" />
          </h4>
        </div>
        <button className=" col-span-2 col-start-1 flex h-14 w-36 -translate-x-3 -translate-y-2 flex-row-reverse items-center justify-center  rounded-bl-xl rounded-tr-xl  bg-white pr-5 text-news-Items ">
          ادامه مطلب
          <ChevronLeftIcon className="h-8 " />
        </button>
      </article>
    </>
  )
}

export default News
