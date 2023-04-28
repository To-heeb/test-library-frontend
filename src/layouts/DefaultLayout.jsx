import { Navigate, Link, Outlet } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

function DefaultLayout() {

    const { user, token } = useAuthContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = ev => {
        ev.preventDefault()

        // axiosClient.post('/logout')
        //     .then(() => {
        //         setUser({})
        //         setToken(null)
        //     })
    }

    return (
        <div id='defaultLayout'>
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>

                    <div>
                        {user.name} &nbsp; &nbsp;
                        <a onClick={onLogout} className="btn-logout" href="#">Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
                {/* {notification &&
                    <div className="notification">
                        {notification}
                    </div>
                } */}
            </div>
        </div>
    );
}

export default DefaultLayout