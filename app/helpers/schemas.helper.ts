import { z } from 'zod'
import { eTestFormKey } from '~/types/enums/form.enum'

export const getTestSchema = (t: (key: string) => string) =>
  z
    .object({
      [eTestFormKey.Quantity]: z.string().nonempty({ message: t('inputValidate.fieldCannotBeEmpty') }),
      [eTestFormKey.Status]: z.enum(['IN_PROGRESS', 'PENDING', 'DONE'], {
        message: 'You need to select a notification type.'
      }),
      [eTestFormKey.Username]: z.string().optional(),
      [eTestFormKey.Items]: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: 'You have to select at least one item.'
      }),
      [eTestFormKey.Bio]: z
        .string()
        .min(10, {
          message: 'Bio must be at least 10 characters.'
        })
        .max(160, {
          message: 'Bio must not be longer than 30 characters.'
        }),
      [eTestFormKey.Email]: z.string().nonempty({ message: t('inputValidate.fieldCannotBeEmpty') })
    })
    .superRefine((data, ctx) => {
      if (data[eTestFormKey.Status] === 'PENDING') {
        console.log('check ne: ', data[eTestFormKey.Username])
        if (!data[eTestFormKey.Username]) {
          ctx.addIssue({
            code: 'custom',
            path: [eTestFormKey.Username],
            message: t('inputValidate.fieldCannotBeEmpty')
          })
        }
      }
    })

export type TestFormSchema = z.infer<ReturnType<typeof getTestSchema>>
