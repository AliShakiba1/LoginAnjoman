import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

import { memo } from 'react'

const text2: string =
  '   غیر فعال است ! برای استفاده از این قسمت باید وارد حساب کاربری خود شوید'

function HoverCardMain({ children, text = text2 }: any) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        {/* <Button className="icon rounded-full !bg-[#F5F5F5] bg-opacity-70"> */}
        {/* <Cog6ToothIcon className="h-8 text-news-Items text-opacity-50" /> */}
        {/* </Button> */}
        {children}
      </HoverCardTrigger>
      <HoverCardContent
        className={
          text == 'none'
            ? 'hidden'
            : 'mt-2 border-none bg-gray-900 bg-opacity-80 text-right text-white shadow-2xl'
        }
      >
        <p>{text}</p>
      </HoverCardContent>
    </HoverCard>
  )
}

export default memo(HoverCardMain)
