import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import DialogCustom from '~/components/customs/dialog-custom'
import TableCustom from '~/components/customs/table-custom'
import YarnCodeForm from '~/components/forms/baseline-information-management/yarn-code-form'
import { TRANSLATE_KEYS } from '~/constants'
import formHelper from '~/helpers/form.helper'
import { type YarnCodeFormSchema, getYarnCodeSchema } from '~/helpers/schemas.helper'
import tableHelper from '~/helpers/table.helper'
import useAppTranslations from '~/hooks/use-app-translations'
import BaseLayoutContent from '~/layouts/base-layout-content'
import YarnCodeAction from '~/routes/admin/baseline-information-management/yarn-code/components/yarn-code-action'
import YarnCodeFilter from '~/routes/admin/baseline-information-management/yarn-code/components/yarn-code-filter'
import useGlobalLoaderStore from '~/stores/global-loader'
import { type IYarnCode, eYarnType } from '~/types'

export function meta() {
  return [{ title: 'ERP - Yarn code' }, { name: 'ERP Yarn code', content: 'Welcome to ERP' }]
}

const YarnCode = () => {
  const { t } = useAppTranslations()
  const [open, setOpen] = useState(false)
  const [openUpsertForm, setOpenUpsertForm] = useState(false)
  const [inforYarnItemDelete, setInforYarnItemDelete] = useState<any>(undefined)
  const [dataYarnCode, setDataYarnCode] = useState<IYarnCode | undefined>(undefined)
  const { startLoading, stopLoading } = useGlobalLoaderStore()
  const [isLoading, setIsLoading] = useState(true)
  const data = Array.from({ length: 100 }, (_, i) => ({
    id: `id-${i + 1}`,
    yarnName: `${String.fromCharCode(65 + (i % 26))}방적사`,
    yarnColor: '블랙',
    notes: `Note-${i + 1}`,
    note: `Note-${i + 1}`,
    dateOfRegistration: `2025.05.25 ${i + 1}`,
    yarnType: eYarnType.Spandex
  }))
  // Form
  const formSchema = getYarnCodeSchema(t)
  const form = useForm<YarnCodeFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: formHelper.getDefaultValuesYarnCode(),
    mode: 'all'
  })
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
  const handleOpenDialogDeleteAction = (data?: IYarnCode) => {
    setInforYarnItemDelete(data)
    setOpen(true)
  }

  const handleOpenDialogEditAction = (data?: IYarnCode) => {
    setDataYarnCode(data)
    setOpenUpsertForm(true)
  }

  const handleEditYarnItem = () => {
    setOpenUpsertForm(false)
  }

  return (
    <BaseLayoutContent>
      {/* Filter */}
      <YarnCodeFilter />

      {/* Action */}
      <YarnCodeAction
        searchResults={19}
        onNewRegistrationAction={() => {
          setOpenUpsertForm(true)
        }}
      />

      {/* Table */}
      <TableCustom
        columns={tableHelper.getColumnsYarnCodeTable(t, handleOpenDialogDeleteAction, handleOpenDialogEditAction)}
        data={data}
        loading={isLoading}
      />

      {/* Dialog delete*/}
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

      {/* Dialog upsert*/}
      <DialogCustom
        open={openUpsertForm}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setDataYarnCode(undefined)
            setTimeout(() => {
              form.reset(formHelper.getDefaultValuesYarnCode())
            }, 200)
          }
          setOpenUpsertForm(isOpen)
        }}
        cancelText={t(TRANSLATE_KEYS.ACTION, 'cancel')}
        okText={t(TRANSLATE_KEYS.ACTION, 'check')}
        classNameContent='sm:max-w-[800px]'
        onOkAction={handleEditYarnItem}
        disabledOkBtn={!form.formState.isValid}
        title={t(TRANSLATE_KEYS.TITLE, 'newRegistrationOfYarn')}
      >
        <YarnCodeForm form={form} data={dataYarnCode} />
      </DialogCustom>
    </BaseLayoutContent>
  )
}

export default YarnCode
