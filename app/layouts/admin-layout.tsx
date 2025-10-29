import { Outlet } from 'react-router'
import Header from '~/components/common/header'
import { AppSidebar } from '~/components/common/sidebar/app-sidebar'
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar'
import { useActiveSidebarTitle } from '~/hooks/use-active-sidebar-title'

export function meta() {
  return [{ title: 'ERP System' }, { name: 'ERP Application', content: 'Welcome to ERP' }]
}

const AdminLayout = () => {
  const pageTitle = useActiveSidebarTitle()
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='overflow-hidden bg-gray-bg'>
        <Header pageTitle={pageTitle} />
        <section className='py-5 px-[30px] relative h-full w-full'>
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AdminLayout
