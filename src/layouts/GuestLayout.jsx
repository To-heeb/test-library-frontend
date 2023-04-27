import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthProvider'

function GuestLayout() {
    const { token } = useAuthContext()
    //debugger
    if (token) {
        return <Navigate to="/" />
    }
    return (
        <div>
            GuestLayout
            <Outlet />
        </div>
    )
}

export default GuestLayout