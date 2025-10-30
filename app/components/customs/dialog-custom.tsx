import clsx from 'clsx'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'

interface IDialogCustomProps {
  open?: boolean
  onOpenChange?: (isOpen: boolean) => void
  title?: string
  description?: string
  cancelText?: string
  okText?: string
  classNameHeader?: string
  showDescription?: boolean
  hiddenCancelAction?: boolean
  hiddenOkAction?: boolean
  hiddenHeader?: boolean
  hiddenFooter?: boolean
  onCancelAction?: () => void
  onOkAction?: () => void | Promise<void>
  triggerBtn?: React.ReactNode
  children?: React.ReactNode
}
const DialogCustom = ({
  open,
  onOpenChange,
  title,
  description,
  cancelText = 'Cancel',
  okText = 'Ok',
  classNameHeader,
  showDescription = false,
  hiddenCancelAction = false,
  hiddenOkAction = false,
  hiddenHeader = false,
  hiddenFooter = false,
  onCancelAction,
  onOkAction,
  triggerBtn,
  children
}: IDialogCustomProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Trigger Btn */}
      {triggerBtn && <DialogTrigger asChild>{triggerBtn}</DialogTrigger>}

      {/* Dialog content */}
      <DialogContent className='sm:max-w-[425px] p-0 gap-[15px]'>
        {/* Dialog header */}
        <DialogHeader
          className={clsx(
            'p-[15px] border-b border-light-gray !text-center',
            hiddenHeader && 'hidden',
            classNameHeader
          )}
        >
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className={clsx(!showDescription && 'hidden')}>{description}</DialogDescription>
        </DialogHeader>

        {/* Main content */}
        <section className={clsx('px-[15px]', hiddenFooter && 'pb-[15px]', hiddenHeader && 'pt-[15px]')}>
          {children}
        </section>

        {/* Dialog footer */}
        {!hiddenFooter && (
          <DialogFooter className='border-t border-light-gray p-[15px] gap-[15px]'>
            {!hiddenCancelAction && (
              <DialogClose asChild className='flex-1'>
                <Button
                  variant='outline'
                  className='flex-1 bg-light-gray border-transparent'
                  onClick={() => onCancelAction?.()}
                >
                  {cancelText}
                </Button>
              </DialogClose>
            )}
            {!hiddenOkAction && (
              <Button className='flex-1' onClick={() => onOkAction?.()}>
                {okText}
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default DialogCustom
