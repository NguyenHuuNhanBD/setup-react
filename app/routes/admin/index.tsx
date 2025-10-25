import { Navigate } from 'react-router'
import { ROUTES } from '~/constants'

const AdminPage = () => {
  return <Navigate to={`/${ROUTES.ADMIN.BASE}/${ROUTES.ADMIN.AUTH.LOGIN}`} replace />
}

export default AdminPage
