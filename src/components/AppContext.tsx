import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage, changeLocalStorage } from "../services/storage"

interface IAppContext {
    user: { name: string, email: string } | null
    isLoggedIn: boolean
    login: (email: string, password: string) => Promise<void>
    logout: () => void
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [user, setUser] = useState<{ name: string, email: string } | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login, user: storageUser } = JSON.parse(storage)
        setIsLoggedIn(login)
        setUser(storageUser)
      }
    }, [])

    const login = async (email: string, password: string) => {
        const success = email === 'user@example.com' && password === 'password';
        if (success) {
            setUser({ name: 'Usuário', email });
            setIsLoggedIn(true);
            changeLocalStorage({
                login: true,
                user: { name: 'Usuário', email }
            });
        }
    }

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        changeLocalStorage({ login: false, user: null });
    }
  
    return (
      <AppContext.Provider value={{ user, isLoggedIn, login, logout, setIsLoggedIn }}>
        { children }
      </AppContext.Provider>
    )
}
