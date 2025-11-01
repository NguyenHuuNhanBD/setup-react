import { cn } from '~/lib/utils'

interface FilterFieldProps {
  label: string
  children: React.ReactNode
  labelWidth?: number
  className?: string
}

export const FilterField = ({ label, children, labelWidth = 80, className }: FilterFieldProps) => (
  <section className={cn('flex items-center gap-space-main', className)}>
    <p className='text-black-main leading-[20px] tracking-[-0.5%] font-semibold' style={{ width: `${labelWidth}px` }}>
      {label}
    </p>
    {children}
  </section>
)
