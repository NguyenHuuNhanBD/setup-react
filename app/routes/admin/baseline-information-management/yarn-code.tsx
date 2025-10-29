import TableCustom from '~/components/customs/table-custom'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import tableHelper from '~/helpers/table.helper'
import useAppTranslations from '~/hooks/use-app-translations'

export function meta() {
  return [{ title: 'ERP - Yarn code' }, { name: 'ERP Yarn code', content: 'Welcome to ERP' }]
}

const YarnCode = () => {
  const { t } = useAppTranslations()
  return (
    <section className='flex flex-col gap-[30px]  w-full'>
      {/* Filter */}
      <Select>
        <SelectTrigger isHiddenBorder>
          <SelectValue placeholder='몸판 등 구분 선택' />
        </SelectTrigger>
        <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
          <SelectGroup>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <section className='w-full'>
        <TableCustom
          columns={tableHelper.getColumnsYarnCodeTable(t)}
          data={[
            {
              id: '728ed522f',
              yarnType: 'A방적사',
              yarnName: '원사A',
              yarnColor: '블랙',
              notes: 'Note',
              dateOfRegistration: '2025.05.25'
            },
            {
              id: '728ed522f',
              yarnType: 'B방적사',
              yarnName: '원사A',
              yarnColor: '블랙',
              notes: 'Note',
              dateOfRegistration: '2025.05.25'
            },
            {
              id: '728ed522f',
              yarnType: 'C방적사',
              yarnName: '원사A',
              yarnColor: '블랙',
              notes: 'Note',
              dateOfRegistration: '2025.05.25'
            }
          ]}
        />
      </section>
    </section>
  )
}

export default YarnCode
