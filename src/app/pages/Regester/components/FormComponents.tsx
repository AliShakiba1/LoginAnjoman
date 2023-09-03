import {

  KeyIcon,
  PhoneIcon,
 
  UserIcon,
} from '@heroicons/react/24/outline'
import { Form } from 'formik'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ButtonBlue, ButtonGray } from '../../../Components/Button'
import Input from '../../../Components/Input'
import ListBox from './ListBox'

function FormComponents({ formik, majors }: any) {
  return (
    <Form className=" flex flex-col  p-5 pt-6 " onSubmit={formik.handleSubmit}>
      <Input
        label=": نام و نام خانوادگی "
        placeholder={'... نام و نام خانوادگی خود را وارد کنید'}
        htmlFor="Fname"
        type="text"
        value={formik.values.Fname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.Fname && formik.errors.Fname ? formik.errors.Fname : ''
        }
      >
        <UserIcon className="iconIncideInput" />
      </Input>
      <label
        htmlFor=""
        className="flex flex-col gap-3 pb-4  text-right text-lg text-white  "
      >
        : رشته تحصیلی
        <ListBox name={'major'} majors={majors} />
      </label>
      <Input
        label=": شماره دانشجویی"
        placeholder={'... شماره دانشجوی خود را وارد کنید'}
        htmlFor="studentId"
        type="text"
        value={formik.values.studentId}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.studentId && formik.errors.studentId
            ? formik.errors.studentId
            : ''
        }
      >
        <UserIcon className="iconIncideInput" />
      </Input>
      <Input
        label=": شماره همراه"
        placeholder={'... شماره همراه خود را وارد کنید'}
        type="text"
        htmlFor="phoneNumber"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.phoneNumber && formik.errors.phoneNumber
            ? formik.errors.phoneNumber
            : ''
        }
      >
        <PhoneIcon className="iconIncideInput" />
      </Input>
      <Input
        label=": رمز عبور"
        placeholder={'... رمز عبور خود را وارد کنید'}
        type="password"
        htmlFor="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : ''
        }
      >
        <KeyIcon className="iconIncideInput" />
      </Input>
      <span>
        <ButtonBlue text="ثبت نام" type="submit" />
        <Link to="/login">
          <ButtonGray text="ورود" btnBlueClass={` w-32`}>
            ورود
          </ButtonGray>
        </Link>
      </span>
    </Form>
  )
}
export default memo(FormComponents)
