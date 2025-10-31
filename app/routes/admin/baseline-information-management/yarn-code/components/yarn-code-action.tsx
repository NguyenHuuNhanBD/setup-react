import { CategoryIcon, EditIcon } from '~/assets/icons'
import { Button } from '~/components/ui/button'
import { TRANSLATE_KEYS } from '~/constants'
import useAppTranslations from '~/hooks/use-app-translations'

interface IYarnCodeActionProps {
  searchResults?: number
  onNewRegistrationAction: () => void
}
const YarnCodeAction = ({ searchResults = 0, onNewRegistrationAction }: IYarnCodeActionProps) => {
  const { t } = useAppTranslations()
  return (
    <section className='flex flex-wrap items-center justify-between gap-5'>
      <p className='text-black-main text-base leading-[20px] tracking-[-0.5%]'>
        {t(TRANSLATE_KEYS.COMMON, 'searchResults')}({searchResults})
      </p>
      <section className='flex flex-wrap items-center gap-5'>
        <Button className='bg-[white] text-black-main main-shadow'>
          {t(TRANSLATE_KEYS.ACTION, 'deleteSelection')}
        </Button>
        <Button className='bg-[#965EF5]'>
          <CategoryIcon className='!w-5 !h-5 text-white' />
          <span>{t(TRANSLATE_KEYS.ACTION, 'settingYarnClassification')}</span>
        </Button>
        <Button onClick={onNewRegistrationAction}>
          <EditIcon className='!w-[28px] !h-[28px] text-white' />
          <span>{t(TRANSLATE_KEYS.ACTION, 'newRegistration')}</span>
        </Button>
      </section>
    </section>
  )
}

export default YarnCodeAction
