import { BaselineInformationManagementIcon } from '../assets/icons'
import { ROUTES } from '../constants/routes.constant'
import { type IAppTranslations, eYarnType } from '../types'
import { TRANSLATE_KEYS } from './translate-keys.constant'

export const DATA = {
  GET_ITEMS: (t: (key: string) => string) => {
    return [
      {
        id: 'recents',
        label: 'Recents'
      },
      {
        id: 'home',
        label: 'Home'
      },
      {
        id: 'applications',
        label: 'Applications'
      },
      {
        id: 'desktop',
        label: 'Desktop'
      },
      {
        id: 'downloads',
        label: 'Downloads'
      },
      {
        id: 'documents',
        label: 'Documents'
      }
    ]
  },
  GET_EMAIL_OPTIONS: (t: (key: string) => string) => {
    return [
      {
        label: 'n@example.com',
        value: '01'
      },
      {
        label: 'o@example.com',
        value: '02'
      },
      {
        label: 'i@example.com',
        value: '03'
      }
    ]
  },
  GET_STATUS: (t: (key: string) => string) => {
    return [
      {
        label: 'In progress',
        value: 'IN_PROGRESS'
      },
      {
        label: 'Pending',
        value: 'PENDING'
      },
      {
        label: 'Done',
        value: 'DONE'
      }
    ]
  },
  GET_YARN_TYPE_OPTIONS: (t: IAppTranslations) => {
    return [
      {
        label: t(TRANSLATE_KEYS.ENUMS, 'yarnType.spunYarn'),
        value: eYarnType.SpunYarn
      },
      {
        label: t(TRANSLATE_KEYS.ENUMS, 'yarnType.dty'),
        value: eYarnType.Dty
      },
      {
        label: t(TRANSLATE_KEYS.ENUMS, 'yarnType.spandex'),
        value: eYarnType.Spandex
      },
      {
        label: t(TRANSLATE_KEYS.ENUMS, 'yarnType.other'),
        value: eYarnType.Other
      }
    ]
  },
  GET_SIDEBAR_MENU: (t: IAppTranslations) => {
    const basePath = `/${ROUTES.ADMIN.BASE}`
    const subRoutes = ROUTES.ADMIN.BASE_LINE_INFORMATION_MANAGEMENT
    const items = Object.entries(subRoutes).map(([key, value]) => {
      const lowerKey = key.toLowerCase().replace(/_([a-z])/g, (_, c) => c.toUpperCase())
      return {
        title: t(TRANSLATE_KEYS.SIDEBAR_MENU, `baselineInformationManagement.${lowerKey}`),
        url: `${basePath}/${value}`
      }
    })
    return [
      {
        icon: BaselineInformationManagementIcon,
        title: t(TRANSLATE_KEYS.SIDEBAR_MENU, 'baselineInformationManagement.title'),
        url: '#',
        items
      }
    ]
  }
}
