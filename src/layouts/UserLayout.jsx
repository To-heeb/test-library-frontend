import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

function UserLayout() {

    const { user, token } = useAuthContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            {/* navigate to user dashboard here */}
            UserLayout
            <Outlet />
        </div>
    )
}

export default UserLayout