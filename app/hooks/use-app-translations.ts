import { useTranslation } from 'react-i18next'

const useAppTranslations = () => {
  const { t: translate, i18n } = useTranslation()
  const t = (key: string, keyPrefix: string, values?: Record<string, any>) => {
    return translate(`${key}.${keyPrefix}`, values)
  }
  return { t, i18n }
}

export default useAppTranslations
