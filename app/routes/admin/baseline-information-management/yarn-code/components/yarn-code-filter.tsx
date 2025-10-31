import SelectCustom from '~/components/customs/select-custom'
import { Button } from '~/components/ui/button'
import { SelectItem } from '~/components/ui/select'
import { DATA, TRANSLATE_KEYS } from '~/constants'
import useAppTranslations from '~/hooks/use-app-translations'

const YarnCodeFilter = () => {
  const { t } = useAppTranslations()
  return (
    <section className='main-shadow px-[15px] py-[9.5px] rounded-[15px] flex flex-wrap items-center justify-between gap-[30px]'>
      {/* Filter */}
      <section className='flex flex-wrap items-center gap-[30px]'>
        {/* Yarn type */}
        <section className='flex items-center gap-[15px]'>
          <p className='w-[80px] text-black-main leading-[20px] tracking-[-0.5%] font-semibold'>
            {t(TRANSLATE_KEYS.LABEL, 'yarnType')}
          </p>
          <SelectCustom
            placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'selectYarnType')}
            classNameSelectTrigger='w-[129px]'
          >
            {DATA.GET_YARN_TYPE_OPTIONS(t).map((opt) => {
              return (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              )
            })}
          </SelectCustom>
        </section>

        {/* Yarn name */}
        <section className='flex items-center gap-[15px]'>
          <p className='w-[80px] text-black-main leading-[20px] tracking-[-0.5%] font-semibold'>
            {t(TRANSLATE_KEYS.LABEL, 'yarnName')}
          </p>
          <SelectCustom
            placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'selectTheOriginalName')}
            classNameSelectTrigger='w-[115px]'
          >
            {DATA.GET_YARN_TYPE_OPTIONS(t).map((opt) => {
              return (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              )
            })}
          </SelectCustom>
        </section>

        {/* Yarn color */}
        <section className='flex items-center gap-[15px]'>
          <p className='w-[80px] text-black-main leading-[20px] tracking-[-0.5%] font-semibold'>
            {t(TRANSLATE_KEYS.LABEL, 'yarnColor')}
          </p>
          <SelectCustom
            placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'selectTheColor')}
            classNameSelectTrigger='w-[102px]'
          >
            {DATA.GET_YARN_TYPE_OPTIONS(t).map((opt) => {
              return (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              )
            })}
          </SelectCustom>
        </section>
      </section>

      <Button className='bg-[#A4B5BA] text-white'>{t(TRANSLATE_KEYS.ACTION, 'search')}</Button>
    </section>
  )
}

export default YarnCodeFilter
