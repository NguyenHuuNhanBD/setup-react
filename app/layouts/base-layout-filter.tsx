// components/filters/base-filter-layout.tsx
import { Button } from '~/components/ui/button'
import { TRANSLATE_KEYS } from '~/constants'
import useAppTranslations from '~/hooks/use-app-translations'
import { cn } from '~/lib/utils'

interface IBaseFilterLayoutProps {
  children: React.ReactNode
  onSearch?: () => void
  className?: string
}

export const BaseFilterLayout = ({ children, onSearch, className }: IBaseFilterLayoutProps) => {
  const { t } = useAppTranslations()
  return (
    <section
      className={cn(
        'main-shadow px-space-main py-[9.5px] rounded-space-main flex flex-wrap items-center justify-between gap-[30px]',
        className
      )}
    >
      <section className='flex flex-wrap items-center gap-[30px]'>{children}</section>
      {onSearch && (
        <Button className='bg-[#A4B5BA] text-white' onClick={onSearch}>
          {t(TRANSLATE_KEYS.ACTION, 'search')}
        </Button>
      )}
    </section>
  )
}
