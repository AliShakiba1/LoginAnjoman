import {
  ArrowLeftOnRectangleIcon,
  BellAlertIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  EllipsisVerticalIcon,
  ExclamationCircleIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/button'

import { memo, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import logoInMobile from './logoinmenuphone.svg'

import CopyRight from '@/app/Components/CopyRight'
import HoverCardMain from '@/app/Components/HoverCardMain'
import { mainLogo, mainLogoDark } from '@/core/values/images-address'

const items = [
  {
    label: 'خانه',
    path: '/',
    key: 'home',
    icon: <HomeIcon className="mb-1 ml-2 h-5  !text-news-Items" />,
  },
  {
    label: 'درس ها',
    path: '/',
    key: 'lesson',
    icon: <BookOpenIcon className="mb-1 ml-2 h-5 !text-news-Items" />,
    disabled: true,
  },
  {
    label: 'گپ و گفتگو',
    path: '/',
    key: 'chat',
    icon: (
      <ChatBubbleLeftRightIcon className="mb-1 ml-2 h-5 !text-news-Items" />
    ),
    disabled: true,
  },
  {
    label: 'درباره ما',
    path: '/aboutus',
    key: 'aboutus',
    icon: <ExclamationCircleIcon className="mb-1 ml-2 h-5 !text-news-Items" />,
  },
]

const disabledText: string =
  '   غیر فعال است ! برای استفاده از این قسمت باید وارد حساب کاربری خود شوید'

function NewNavBar() {
  return (
    <>
      <div className="!container mx-auto mt-3 rounded-xl bg-white  p-4  ">
        <nav className="hidden flex-row-reverse items-center justify-between gap-3 lg:flex  ">
          <img src={mainLogoDark} alt="" className="w-14" />
          <ul className="container flex flex-row-reverse justify-start bg-white  ">
            {items.map(item => (
              <li key={item.key}>
                <HoverCardMain
                  text={item.disabled == true ? disabledText : 'none'}
                >
                  <Link to={item.path}>
                    <Button
                      className=" text-news-Items "
                      variant={'link'}
                      disabled={item.disabled}
                    >
                      {item.label}
                      {item.icon}
                    </Button>
                  </Link>
                </HoverCardMain>
              </li>
            ))}
          </ul>

          <HoverCardMain>
            <Button className=" icon rounded-full !bg-[#F5F5F5]">
              <BellAlertIcon className="h-8 text-news-Items text-opacity-50" />
            </Button>
          </HoverCardMain>
          <HoverCardMain>
            <Button className=" icon rounded-full !bg-[#F5F5F5]">
              <Cog6ToothIcon className="h-8 text-news-Items text-opacity-50" />
            </Button>
          </HoverCardMain>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex flex-row-reverse gap-2 rounded-xl bg-news-Items p-7 ">
                  <UserIcon className=" h-8 " />
                  مهمان
                </NavigationMenuTrigger>
                <NavigationMenuContent className=" bg-news-Items p-2 text-white ">
                  <Link
                    to={'/login'}
                    className="z-auto flex w-56 items-center  justify-center gap-5"
                  >
                    ورود به حساب کاربری
                    <ArrowLeftOnRectangleIcon className="icon h-8 " />
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <nav className=" flex items-center justify-between gap-2 lg:hidden">
          <li className="space-x-5">
            <Button className="icon rounded-full bg-white">
              <Popover>
                <PopoverTrigger>
                  <UserIcon className="h-8 text-news-Items hover:text-white" />
                </PopoverTrigger>
                <PopoverContent className="m-3 max-w-fit text-news-Items shadow-2xl">
                  <Link to={'/login'} className="text-xs">
                    ورود به حساب کاربری
                  </Link>
                </PopoverContent>
              </Popover>
            </Button>

            <HoverCardMain>
              <Button className=" icon rounded-full !bg-[#F5F5F5]">
                <BellAlertIcon className="h-8 text-news-Items text-opacity-50" />
              </Button>
            </HoverCardMain>
          </li>
          <img src={mainLogoDark} alt="" className="w-14" />

          <Sheet>
            <SheetTrigger>
              <Button className="icon rounded-full bg-[#F5F5F5]">
                <EllipsisVerticalIcon className="h-8 text-news-Items hover:text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="!max-h-screen rounded-l-2xl border-none bg-persian-blue-dark pr-0 text-white">
              <SheetHeader>
                <SheetTitle>
                  <ul className="mt-3 flex flex-col items-end space-y-4 ">
                    {items.map(item => (
                      <li key={item.key}>
                        <Link to={item.path}>
                          <Button
                            className=" flex w-56 justify-end gap-2 space-x-10 rounded-none rounded-l-xl bg-white p-5 text-news-Items"
                            variant={'link'}
                            disabled={item.disabled}
                          >
                            {item.label}
                            {item.icon}
                          </Button>
                        </Link>
                      </li>
                    ))}
                    <img
                      src={logoInMobile}
                      alt=""
                      className="mx-auto w-60 pt-24"
                    />
                    <CopyRight className="pt-20" />
                  </ul>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default memo(NewNavBar)
