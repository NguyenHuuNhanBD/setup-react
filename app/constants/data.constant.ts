import { type IAppTranslations, eYarnType } from '../types'
import { eYarnCodeFormKey } from '../types/enums/form.enum'
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
  GET_BASE_INPUT_YARN_CODE: (t: IAppTranslations) => {
    return [
      {
        label: t(TRANSLATE_KEYS.INPUT_LABEL, 'yarnName'),
        placeholder: t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'yarnName'),
        key: eYarnCodeFormKey.YarnName
      },
      {
        label: t(TRANSLATE_KEYS.INPUT_LABEL, 'yarnColor'),
        placeholder: t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'yarnColor'),
        key: eYarnCodeFormKey.YarnColor
      },
      {
        label: t(TRANSLATE_KEYS.INPUT_LABEL, 'note'),
        placeholder: t(TRANSLATE_KEYS.INPUT_PLACEHOLDER, 'note'),
        key: eYarnCodeFormKey.Note
      }
    ]
  }
}
