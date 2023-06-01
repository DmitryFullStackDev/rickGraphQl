import * as yup from 'yup'

export const validationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
})
