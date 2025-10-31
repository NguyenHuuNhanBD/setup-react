import { eYarnCodeFormKey } from '~/types/enums/form.enum'

const formHelper = {
  getDefaultValuesYarnCode: () => {
    return {
      [eYarnCodeFormKey.YarnType]: undefined,
      [eYarnCodeFormKey.YarnName]: '',
      [eYarnCodeFormKey.YarnColor]: '',
      [eYarnCodeFormKey.Note]: ''
    }
  }
}

export default formHelper
