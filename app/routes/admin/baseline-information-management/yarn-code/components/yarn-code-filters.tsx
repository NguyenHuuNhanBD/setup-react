import SelectCustom from '~/components/customs/select-custom'
import { FilterField } from '~/components/features/filters/filter-field'
import { SelectItem } from '~/components/ui/select'
import { DATA, TRANSLATE_KEYS } from '~/constants'
import useAppTranslations from '~/hooks/use-app-translations'
import { BaseFilterLayout } from '~/layouts/base-layout-filter'
import type { IYarnCodeFilters } from '~/types'

interface IYarnCodeFiltersProps {
  values: IYarnCodeFilters
  onChange: (values: IYarnCodeFilters) => void
  onSearch: () => void
}

const YarnCodeFilters = ({ values, onChange, onSearch }: IYarnCodeFiltersProps) => {
  const { t } = useAppTranslations()

  const handleChange = (key: keyof IYarnCodeFilters, value: any) => {
    onChange({ ...values, [key]: value })
  }

  return (
    <BaseFilterLayout onSearch={onSearch}>
      <FilterField label={t(TRANSLATE_KEYS.LABEL, 'yarnType')}>
        <SelectCustom
          placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'selectYarnType')}
          classNameSelectTrigger='w-[129px]'
          value={values.yarnType}
          onChange={(v) => handleChange('yarnType', v)}
        >
          {DATA.GET_YARN_TYPE_OPTIONS(t).map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectCustom>
      </FilterField>

      <FilterField label={t(TRANSLATE_KEYS.LABEL, 'yarnName')}>
        <SelectCustom
          placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'selectTheOriginalName')}
          classNameSelectTrigger='w-[115px]'
        >
          {DATA.GET_YARN_TYPE_OPTIONS(t).map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectCustom>
      </FilterField>

      <FilterField label={t(TRANSLATE_KEYS.LABEL, 'yarnColor')}>
        <SelectCustom
          placeholder={t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'selectTheColor')}
          classNameSelectTrigger='w-[102px]'
        >
          {DATA.GET_YARN_TYPE_OPTIONS(t).map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectCustom>
      </FilterField>
    </BaseFilterLayout>
  )
}

export default YarnCodeFilters
