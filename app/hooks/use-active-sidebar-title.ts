import { useLocation } from 'react-router'
import { DATA } from '~/constants'
import useAppTranslations from '~/hooks/use-app-translations'

export const useActiveSidebarTitle = () => {
  const { t } = useAppTranslations()
  const location = useLocation()
  const sidebarMenu = DATA.GET_SIDEBAR_MENU(t)
  const allItems = sidebarMenu.flatMap((group) => group.items ?? [])
  const activeItem = allItems.find((item) => location.pathname.endsWith(item.url))
  return activeItem?.title ?? ''
}
