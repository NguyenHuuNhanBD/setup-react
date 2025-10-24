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
  }
}
