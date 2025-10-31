import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { FullLogoIcon } from '~/assets/icons'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { TRANSLATE_KEYS } from '~/constants'
import { type LoginFormSchema, getLoginSchema } from '~/helpers/schemas.helper'
import useAppTranslations from '~/hooks/use-app-translations'
import useGlobalLoaderStore from '~/stores/global-loader'
import { eLoginStep } from '~/types'
import { eLoginFormKey } from '~/types/enums/form.enum'

interface ILoginFormProps {
  onChangeStep: (step: eLoginStep) => void
}
const LoginForm = ({ onChangeStep }: ILoginFormProps) => {
  const { t } = useAppTranslations()
  const { startLoading, stopLoading } = useGlobalLoaderStore()
  const formSchema = getLoginSchema(t)
  const navigate = useNavigate()
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      [eLoginFormKey.Email]: '',
      [eLoginFormKey.Password]: ''
    },
    mode: 'all'
  })

  const onSubmit = (values: LoginFormSchema) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    form.trigger()
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-[45px] bg-white p-[45px] rounded-[15px] w-[400px]'
      >
        <FullLogoIcon className='w-[160px] h-[24px] self-center text-primary-main' />

        <section className='flex flex-col gap-8'>
          {/* Email */}
          <FormField
            control={form.control}
            name={eLoginFormKey.Email}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t(TRANSLATE_KEYS.INPUT_LABEL, 'email')}</FormLabel>
                <FormControl>
                  <Input placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'email')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name={eLoginFormKey.Password}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t(TRANSLATE_KEYS.INPUT_LABEL, 'password')}</FormLabel>
                <FormControl>
                  <Input placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'password')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <Button
          type='button'
          disabled={!form.formState.isValid}
          onClick={() => {
            onChangeStep(eLoginStep.SelectAccountType)
            // navigate(`/${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.BASE_LINE_INFORMATION_MANAGEMENT.YARN_CODE}`)
          }}
          className='!h-10 rounded-[10px] bg-primary-main text-white cursor-pointer transition-all duration-300 hover:bg-primary-main/80'
        >
          {t(TRANSLATE_KEYS.ACTION, 'login')}
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
