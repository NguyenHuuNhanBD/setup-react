import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <main className='h-[100vh] max-w-[1200px] mx-auto p-5'>
      <Outlet />
    </main>
  )
}

export default MainLayout
