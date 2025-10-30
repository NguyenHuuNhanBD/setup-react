import { useEffect, useState } from 'react'

import { toast } from 'sonner'
import DialogCustom from '~/components/customs/dialog-custom'
import TableCustom from '~/components/customs/table-custom'
import { TRANSLATE_KEYS } from '~/constants'
import tableHelper from '~/helpers/table.helper'
import useAppTranslations from '~/hooks/use-app-translations'
import BaseLayoutContent from '~/layouts/base-layout-content'
import YarnCodeAction from '~/routes/admin/baseline-information-management/yarn-code/components/yarn-code-action'
import YarnCodeFilter from '~/routes/admin/baseline-information-management/yarn-code/components/yarn-code-filter'
import useGlobalLoaderStore from '~/stores/global-loader'

export function meta() {
  return [{ title: 'ERP - Yarn code' }, { name: 'ERP Yarn code', content: 'Welcome to ERP' }]
}

const YarnCode = () => {
  const { t } = useAppTranslations()
  const [open, setOpen] = useState(false)
  const [inforYarnItemDelete, setInforYarnItemDelete] = useState<any>(undefined)
  const { startLoading, stopLoading } = useGlobalLoaderStore()
  const [isLoading, setIsLoading] = useState(true)
  const data = Array.from({ length: 100 }, (_, i) => ({
    id: `id-${i + 1}`,
    yarnType: `${String.fromCharCode(65 + (i % 26))}방적사`,
    yarnName: '원사A',
    yarnColor: '블랙',
    notes: 'Note',
    dateOfRegistration: '2025.05.25'
  }))
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  const handleDeleteYarnItem = async () => {
    startLoading()
    try {
      const res = await fetch(`https://68aaa2a4909a5835049ca6bb.mockapi.io/api/v1/auth/login`, {
        method: 'GET'
      })
      const result = await res.json()
      stopLoading()
      console.log('data: ', inforYarnItemDelete)
      toast.success('Xoa thanh cong')
      setOpen(false)
    } catch (error) {
      stopLoading()
      toast.success('Xoa that bai')
    }
  }
  const handleOpenDialogDeleteAction = (data?: any) => {
    console.log('data lay tu table: ', data)
    setInforYarnItemDelete(data)
    setOpen(true)
  }
  return (
    <BaseLayoutContent>
      {/* Filter */}
      <YarnCodeFilter />

      {/* Action */}
      <YarnCodeAction searchResults={19} />

      {/* Table */}
      <TableCustom
        columns={tableHelper.getColumnsYarnCodeTable(t, handleOpenDialogDeleteAction)}
        data={data}
        loading={isLoading}
      />

      {/* Dialog */}
      <DialogCustom
        open={open}
        onOpenChange={setOpen}
        hiddenHeader
        cancelText={t(TRANSLATE_KEYS.ACTION, 'cancel')}
        okText={t(TRANSLATE_KEYS.ACTION, 'check')}
        onOkAction={handleDeleteYarnItem}
      >
        <p className='text-center py-[29px] text-black-main leading-[30px] tracking-[-0.5%] font-bold text-[22px]'>
          {t(TRANSLATE_KEYS.CONFIRM, 'areYouSureYouWantToDeleteIt')}
        </p>
      </DialogCustom>
    </BaseLayoutContent>
  )
}

export default YarnCode
