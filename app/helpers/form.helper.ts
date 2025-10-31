import { eSettingYarnFormKey, eYarnCodeFormKey } from '~/types/enums/form.enum'

const formHelper = {
  getDefaultValuesYarnCode: () => {
    return {
      [eYarnCodeFormKey.YarnType]: undefined,
      [eYarnCodeFormKey.YarnName]: '',
      [eYarnCodeFormKey.YarnColor]: '',
      [eYarnCodeFormKey.Note]: ''
    }
  },
  getDefaultValuesSettingYarn: () => {
    return {
      [eSettingYarnFormKey.YarnType]: ''
    }
  }
}

export default formHelper
