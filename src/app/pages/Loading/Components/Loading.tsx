import { LogoGif } from '../../../../core/values/images-adderes'
import CopyRight from '../../../Components/CopyRight'

const Loading = () => {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-between ">
      <div className="mx-auto flex flex-col items-center justify-center pt-40">
        <img src={LogoGif} alt="gif On Logo" loading='lazy' className="h-80 " />
        <h1 className="pt-8  text-white sm:text-xl lg:text-2xl">
          انجمن مهندسی کامپیوتر و پزشکی دانشگاه آزاد (واحد قوچان)
        </h1>
      </div>
      <CopyRight className="mb-11" />
    </div>
  )
}

export default Loading
