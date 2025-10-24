import { ErpIcon, LogoIcon } from '~/assets/icons'

export function TeamSwitcher() {
  return (
    <section className='flex items-center gap-[10px] py-[10px] px-5'>
      <LogoIcon className='w-6 h-6' />
      <ErpIcon className='w-[126px] h-5' />
    </section>
  )
}
