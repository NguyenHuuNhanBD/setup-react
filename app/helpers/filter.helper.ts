import { type IYarnCodeFilters, eYarnType } from '~/types'

export const filterHelper = {
  getDefaultFilterYarnCode: () => {
    const filter: IYarnCodeFilters = {
      yarnType: eYarnType.SpunYarn,
      yarnName: '',
      yarnColor: ''
    }
    return filter
  }
}
