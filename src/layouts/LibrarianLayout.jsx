import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthProvider'

function LibrarianLayout() {

    const { user, token } = useAuthContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            LibrarianLayout
            <Outlet />
        </div>
    )
}

export default LibrarianLayout