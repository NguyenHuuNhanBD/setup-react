import { Outlet } from 'react-router'
import { AppSidebar } from '~/components/common/sidebar/app-sidebar'
import { SidebarProvider } from '~/components/ui/sidebar'

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Outlet />
    </SidebarProvider>
  )
}

export default AdminLayout
