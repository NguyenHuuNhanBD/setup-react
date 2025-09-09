import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <>
      <header>This is header auth</header>
      <main>
        <Outlet />
      </main>
      <footer>This is footer auth</footer>
    </>
  )
}

export default AuthLayout
