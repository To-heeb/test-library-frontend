import { createContext, useContext, useState } from "react";


const AuthContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { },
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(localStorage.getItem("BearerToken"));

    const setToken = (token) => {

        _setToken(token);

        if (token) {
            localStorage.setItem("BearerToken", token);
        } else {
            localStorage.removeItem("BearerToken");
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)