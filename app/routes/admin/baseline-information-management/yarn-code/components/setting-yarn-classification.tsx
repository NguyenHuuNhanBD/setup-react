import { useEffect, useState } from 'react'

import clsx from 'clsx'
import { PlusCircleIcon, Trash2Icon } from 'lucide-react'
import type { UseFormReturn } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { DATA, TRANSLATE_KEYS } from '~/constants'
import type { SettingYarnFormSchema } from '~/helpers'
import useAppTranslations from '~/hooks/use-app-translations'
import { eYarnType } from '~/types'
import { eSettingYarnFormKey } from '~/types/enums/form.enum'

interface ISettingYarnClassificationProps {
  form: UseFormReturn<SettingYarnFormSchema>
}
const SettingYarnClassification = ({ form }: ISettingYarnClassificationProps) => {
  const { t } = useAppTranslations()
  const [yarnTypeActive, setYarnTypeActive] = useState<eYarnType | undefined>(eYarnType.SpunYarn)
  const handlePasreForm = () => {
    form.reset({
      [eSettingYarnFormKey.YarnType]: yarnTypeActive
    })
  }

  useEffect(() => {
    handlePasreForm()
  }, [])

  return (
    <section className='grid grid-cols-2'>
      <article className='flex flex-col'>
        <section
          className='flex items-center gap-1 py-3 px-[15px] cursor-pointer'
          onClick={() => {
            form.setValue(eSettingYarnFormKey.YarnType, '')
            form.clearErrors(eSettingYarnFormKey.YarnType)
            setYarnTypeActive(undefined)
          }}
        >
          <PlusCircleIcon className='w-[22px] h-[22px] text-black-main' />
          <p className='leading-[20px] tracking-[-0.5%]'>{t(TRANSLATE_KEYS.LABEL, 'newYarnClassification')}</p>
        </section>
        <section className='flex flex-col max-h-[300px] overflow-y-auto'>
          {DATA.GET_YARN_TYPE_OPTIONS(t).map((yarn) => {
            const isActive = yarn.value === yarnTypeActive
            return (
              <section
                key={yarn.value}
                className={clsx(
                  'group flex items-center justify-between gap-5 py-[10px] px-[15px] cursor-pointer hover:bg-primary-main/5',
                  isActive ? 'bg-primary-main/5 text-primary-main' : 'bg-white text-black-main'
                )}
                onClick={() => {
                  form.setValue(eSettingYarnFormKey.YarnType, yarn.value)
                  form.trigger(eSettingYarnFormKey.YarnType)
                  setYarnTypeActive(yarn.value)
                }}
              >
                <p className='leading-[20px] tracking-[-0.5$]'>{yarn.value}</p>
                <Trash2Icon className='w-5 h-5 text-gray-main opacity-0 group-hover:opacity-100 transition-opacity duration-200' />
              </section>
            )
          })}
        </section>
      </article>
      <Form {...form}>
        <form className='w-full p-[15px] border-l border-light-gray'>
          {/* Yarn type */}
          <FormField
            control={form.control}
            name={eSettingYarnFormKey.YarnType}
            render={({ field }) => (
              <FormItem>
                <FormLabel isRequired>{t(TRANSLATE_KEYS.INPUT_LABEL, 'yarnType')}</FormLabel>
                <FormControl>
                  <Input placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'yarnType')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </section>
  )
}

export default SettingYarnClassification
