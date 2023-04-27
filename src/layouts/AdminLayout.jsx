import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthProvider'

function AdminLayout() {
    const { user, token } = useAuthContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            AdminLayout
            <Outlet />
        </div>
    )
}

export default AdminLayout