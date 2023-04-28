import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

function GuestLayout() {
    const { token } = useAuthContext()
    //debugger
    if (token) {
        return <Navigate to="/" />
    }
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default GuestLayout