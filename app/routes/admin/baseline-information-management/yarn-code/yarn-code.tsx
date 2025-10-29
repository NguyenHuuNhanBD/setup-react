import TableCustom from '~/components/customs/table-custom'
import tableHelper from '~/helpers/table.helper'
import useAppTranslations from '~/hooks/use-app-translations'
import BaseLayoutContent from '~/layouts/base-layout-content'
import YarnCodeAction from '~/routes/admin/baseline-information-management/yarn-code/components/yarn-code-action'
import YarnCodeFilter from '~/routes/admin/baseline-information-management/yarn-code/components/yarn-code-filter'

export function meta() {
  return [{ title: 'ERP - Yarn code' }, { name: 'ERP Yarn code', content: 'Welcome to ERP' }]
}

const YarnCode = () => {
  const { t } = useAppTranslations()
  const data = [
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
  ]
  return (
    <BaseLayoutContent>
      {/* Filter */}
      <YarnCodeFilter />

      {/* Action */}
      <YarnCodeAction searchResults={19} />

      {/* Table */}
      <TableCustom columns={tableHelper.getColumnsYarnCodeTable(t)} data={data} />
    </BaseLayoutContent>
  )
}

export default YarnCode
