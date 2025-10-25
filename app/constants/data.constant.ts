import type { IAppTranslations } from '~/types'

import { BaselineInformationManagementIcon } from '../assets/icons'
import { ROUTES } from '../constants/routes.constant'
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
