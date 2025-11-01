import { useEffect } from 'react'

import type { UseFormReturn } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { DATA, TRANSLATE_KEYS } from '~/constants'
import { commonHelper } from '~/helpers'
import type { YarnCodeFormSchema } from '~/helpers/schemas.helper'
import useAppTranslations from '~/hooks/use-app-translations'
import { type IYarnCode } from '~/types'
import { eYarnCodeFormKey } from '~/types/enums/form.enum'

interface IYarnCodeFormProps {
  form: UseFormReturn<YarnCodeFormSchema>
  data?: IYarnCode
}
const YarnCodeForm = ({ form, data }: IYarnCodeFormProps) => {
  const { t } = useAppTranslations()
  useEffect(() => {
    if (!commonHelper.isEmpty(data)) {
      setTimeout(() => {
        form.reset({
          ...data
        })
      })
    }
  }, [data])

  return (
    <Form {...form}>
      <form className='grid grid-cols-2 gap-space-main items-start'>
        {/* Yarn type */}
        <FormField
          control={form.control}
          name={eYarnCodeFormKey.YarnType}
          render={({ field }) => (
            <FormItem>
              <FormLabel isRequired>{t(TRANSLATE_KEYS.INPUT_LABEL, 'yarnType')}</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value ?? ''}
                onOpenChange={(open) => {
                  if (!open && !field.value) {
                    form.trigger(eYarnCodeFormKey.YarnType)
                  }
                }}
              >
                <FormControl className='w-full'>
                  <SelectTrigger iconCustom>
                    <SelectValue placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'yarnType')} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {DATA.GET_YARN_TYPE_OPTIONS(t).map((item) => {
                    return (
                      <SelectItem key={item?.value} value={item.value}>
                        {item?.label}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {DATA.GET_BASE_INPUT_YARN_CODE(t).map((input) => {
          return (
            <FormField
              key={input.key}
              control={form.control}
              name={input.key}
              render={({ field }) => (
                <FormItem>
                  <FormLabel isRequired>{input.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={input.placeholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )
        })}
      </form>
    </Form>
  )
}

export default YarnCodeForm
