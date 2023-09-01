import { lazy, memo } from 'react'

import svg404 from './404.svg'
// const Svg404 = lazy(() => import('./MiddleComponent.tsx'))
const CopyRight = lazy(() => import('../../Components/CopyRight'))

function Page404() {

  return (
    <div className="flex h-screen flex-col items-center justify-between ">
      <div className="centering mt-20 flex-col">
        <img src={svg404} alt="404" loading="lazy" />
        <h1 className="pb-3 pt-8 text-2xl">
          !متاسفانه صفحه مورد نظر شما پیدا نشد
        </h1>
        <h2 className="opacity-40"> از صبر و شکیبایی شما سپاسگزاریم</h2>
      </div>

      <CopyRight className={'mb-8'} />
    </div>
  )
}

export default memo(Page404)
