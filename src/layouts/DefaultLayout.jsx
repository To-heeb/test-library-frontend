import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthProvider'

function DefaultLayout() {

    const { user, token } = useAuthContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            DefaultLayout
            <Outlet />
        </div>
    )
}

export default DefaultLayout