import type { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import ContentBody from '~/components/common/tables/content-body'
import { DataTableColumnHeader } from '~/components/common/tables/data-table-column-header'
import TitleHead from '~/components/common/tables/title-head'
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
import { type IAppTranslations, eYarnCodeTableKey } from '~/types'

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
  getColumnsYarnCodeTable: (t: IAppTranslations) => {
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
        header: () => <TitleHead title={t(TRANSLATE_KEYS.ENUMS, 'table.yarnCode.yarnName')} />,
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eYarnCodeTableKey.YarnName)} />
        },
        size: 387
      },
      {
        accessorKey: eYarnCodeTableKey.YarnColor,
        header: () => <TitleHead title={t(TRANSLATE_KEYS.ENUMS, 'table.yarnCode.yarnColor')} />,
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eYarnCodeTableKey.YarnColor)} />
        },
        size: 387
      },
      {
        accessorKey: eYarnCodeTableKey.Notes,
        header: () => <TitleHead title={t(TRANSLATE_KEYS.ENUMS, 'table.yarnCode.notes')} />,
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eYarnCodeTableKey.Notes)} />
        },
        size: 387
      },
      {
        accessorKey: eYarnCodeTableKey.DateOfRegistration,
        header: () => <TitleHead title={t(TRANSLATE_KEYS.ENUMS, 'table.yarnCode.dateOfRegistration')} />,
        cell: ({ row }) => {
          return <ContentBody content={row.getValue(eYarnCodeTableKey.DateOfRegistration)} />
        },
        size: 100
      },
      {
        id: 'actions',
        header: () => <TitleHead title={'수정 / 삭제'} />,
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
        },
        size: 120
      }
    ]
    return columns
  }
}

export default tableHelper
