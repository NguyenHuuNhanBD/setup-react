import type { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { DeleteIcon, EditIcon } from '~/assets/icons'
import ContentBody from '~/components/tables/content-body'
import { DataTableColumnHeader } from '~/components/tables/data-table-column-header'
import TitleHead from '~/components/tables/title-head'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu'
import { TRANSLATE_KEYS } from '~/constants'
import { type IAppTranslations, type IYarnCode, eYarnCodeTableKey } from '~/types'

const tableHelper = {
  getColumnsDemoTable: (t: IAppTranslations) => {
    const columns: ColumnDef<any>[] = [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label='Select all'
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label='Select row'
          />
        ),
        enableSorting: false,
        enableHiding: false
      },
      {
        accessorKey: 'email',
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title='Email' />
        }
      },
      {
        accessorKey: 'amount',
        header: () => <div className='text-right'>Amount</div>,
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue('amount'))
          const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(amount)

          return <div className='text-right font-medium'>{formatted}</div>
        }
      },
      {
        id: 'actions',
        cell: ({ row }) => {
          const payment = row.original
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='h-8 w-8 p-0'>
                  <span className='sr-only'>Open menu</span>
                  <MoreHorizontal className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }
      }
    ]
    return columns
  },
  getColumnsYarnCodeTable: (
    t: IAppTranslations,
    onDeleteAction?: (data?: IYarnCode) => void,
    onEditAction?: (data?: IYarnCode) => void
  ) => {
    const columns: ColumnDef<any>[] = [
      {
        id: 'select',
        header: ({ table }) => (
          <section className='flex items-center justify-center'>
            <Checkbox
              checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
              onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
              aria-label='Select all'
              className='w-5 h-5'
            />
          </section>
        ),
        cell: ({ row }) => (
          <section className='flex items-center justify-center'>
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label='Select row'
              className='w-5 h-5'
            />
          </section>
        ),
        size: 50,
        enableSorting: false,
        enableHiding: false
      },
      {
        accessorKey: eYarnCodeTableKey.YarnType,
        header: ({ column }) => {
          return <DataTableColumnHeader column={column} title={t(TRANSLATE_KEYS.ENUMS, 'table.yarnCode.yarnType')} />
        },
        size: 100
      },
      {
        accessorKey: eYarnCodeTableKey.YarnName,
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={t(TRANSLATE_KEYS.ENUMS, 'table.yarnCode.yarnName')} />
        ),
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eYarnCodeTableKey.YarnName)} />
        },
        size: 200
      },
      {
        accessorKey: eYarnCodeTableKey.YarnColor,
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={t(TRANSLATE_KEYS.ENUMS, 'table.yarnCode.yarnColor')} />
        ),
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eYarnCodeTableKey.YarnColor)} />
        },
        size: 200
      },
      {
        accessorKey: eYarnCodeTableKey.Notes,
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={t(TRANSLATE_KEYS.ENUMS, 'table.yarnCode.notes')} />
        ),
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eYarnCodeTableKey.Notes)} />
        },
        size: 200
      },
      {
        accessorKey: eYarnCodeTableKey.DateOfRegistration,
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title={t(TRANSLATE_KEYS.ENUMS, 'table.yarnCode.dateOfRegistration')} />
        ),
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eYarnCodeTableKey.DateOfRegistration)} />
        },
        size: 120
      },
      {
        id: 'actions',
        header: () => <TitleHead title={'수정 / 삭제'} className='text-center' />,
        cell: ({ row }) => {
          return (
            <section className='flex items-center justify-center gap-[5px]'>
              <EditIcon
                className='w-[30px] h-[30px] text-gray-main cursor-pointer'
                onClick={() => onEditAction?.(row.original)}
              />
              <DeleteIcon
                className='w-[30px] h-[30px] text-gray-main cursor-pointer'
                onClick={() => onDeleteAction?.(row.original)}
              />
            </section>
          )
        },
        size: 100
      }
    ]
    return columns
  }
}

export default tableHelper
