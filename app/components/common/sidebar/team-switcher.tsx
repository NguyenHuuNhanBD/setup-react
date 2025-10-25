import clsx from 'clsx'
import { ErpIcon, LogoIcon } from '~/assets/icons'
import { useSidebar } from '~/components/ui/sidebar'

export function TeamSwitcher() {
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'
  return (
    <section
      className={clsx('flex items-center justify-center gap-[10px]', !isCollapsed ? 'justify-start' : 'justify-center')}
    >
      <LogoIcon className='w-6 h-6 shrink-0' />
      {!isCollapsed && <ErpIcon className='w-[126px] h-5' />}
    </section>
  )
}
