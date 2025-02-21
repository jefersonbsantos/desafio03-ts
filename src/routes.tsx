import { useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { AuthContext } from "./contexts/AuthContext"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"
import ProtectedRoute from "./components/ProtectedRoute"
import UserInfo from "./pages/UserInfo"

const MainRoutes = () => {
    const { user } = useContext(AuthContext)

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={ user ? <Conta /> : <Home/> } />
            <Route 
                path='/perfil'
                element={
                    <ProtectedRoute>
                        <UserInfo />
                    </ProtectedRoute>
                }
            />
            <Route path='/infoconta' element={<ContaInfo />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}

export default MainRoutes
