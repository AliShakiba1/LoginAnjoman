import { number, object, string } from 'yup'

export const loginSchema = object({
  studentId: string()
    .required('این فیلد حتما باید پر شود')
    .min(5, 'شماره دانشجوی کوتاه است')
    .max(10, 'شماره دانشجوی بسیار بلند است'),
  password: string()
    .required('این فیلد حتما باید پر شود')
    .min(5, 'پسورد کوتاه است')
    .max(16, 'پسورد بسیار بلند است')
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
      'پسورد باید دارای حداقل یک عدد یا یک حروف باشد',
    ),
})

export const registerSchema = object({
  major: object({
    id: number().required('این فیلد حتما باید پر شود'),
  }),
  studentId: string()
    .required('این فیلد حتما باید پر شود')
    .min(5, 'شماره دانشجوی کوتاه است')
    .max(10, 'شماره دانشجوی بسیار بلند است'),
  password: string()
    .required('این فیلد حتما باید پر شود')
    .min(5, 'پسورد کوتاه است')
    .max(16, 'پسورد بسیار بلند است')
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
      'پسورد باید دارای حداقل یک عدد یا یک حروف باشد',
    ),
  Fname: string()
    .required('این فیلد حتما باید پر شود')
    .min(2, ' اسم و فامیل کوتاه است')
    .max(25, ' اسم و فامیل بسیار بلند است'),
  phoneNumber: string()
    .required('این فیلد حتما باید پر شود')
    .min(2, ' شماره تلفن کوتاه است')
    .max(20, ' شماره تلفن بسیار بلند است'),
})

export const forgerPasswordSchema = object({
  phoneNumber: string()
    .required('این فیلد حتما باید پر شود')
    .min(2, ' شماره تلفن کوتاه است')
    .max(20, ' شماره تلفن بسیار بلند است'),
})
