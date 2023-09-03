import { Listbox, Transition } from '@headlessui/react'
import {
  AcademicCapIcon,
  ChevronUpDownIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { useField } from 'formik'
import { Fragment, memo } from 'react'

function ListBox({ name, majors }: any) {
  const [field] = useField(name)

  return (
    <Listbox
      value={field.value}
      defaultValue={field.value}
      onChange={(value: string) => {
        field.onChange({ target: { value, name } })
      }}
      name={field.name}
    >
      <Listbox.Button className="simplae-animation relative w-full rounded-xl bg-white  p-3 text-news-Items">
        <AcademicCapIcon className="pointer-events-none  absolute right-0 top-3 h-7 pl-3 pr-3 text-news-Items " />
        {field.value.FaMajor ? field.value.FaMajor : '-- انتخواب کنید --'}
        <ChevronUpDownIcon className="pointer-events-none absolute left-0 top-3 h-7 pl-3 text-news-Items " />
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition-all ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="rounded-2xl text-right text-white">
          {majors.map((major: any) => (
            <Listbox.Option
              className="relative cursor-pointer border border-l-0 border-r-0 border-t-0 border-b-gray-50 bg-news-Items p-2 pr-10"
              key={major.id}
              value={major}
            >
              {major.FaMajor}
              <StarIcon className="absolute right-0 top-1 h-7 pr-2" />
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}

export default memo(ListBox)
