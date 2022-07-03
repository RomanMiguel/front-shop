import { createContext, FC, PropsWithChildren, useState } from "react"
import { useNavigate } from "react-router-dom";
import { apiShop } from "../../api/api";

interface IUser {
    user: string;
    login: (username: string, password: string) => void;
    signup: (username: string, password: string, email: string, fullname: string, dni: number, address: string) => void;
}

export const UserContext = createContext<IUser>({} as IUser)

const UserProvider:FC<PropsWithChildren> = ( { children } ) => {
    
    const [user, setUser] = useState("");
    const navigate = useNavigate()

    const login = async (username:string, password:string) => {
        try{
            let res = await apiShop.post("/api/user/login",{username, password})
            console.log(res.data.user)
            navigate("/");
        }catch(err){
            console.log('error login: ', err);
        }
    }

    const signup = async ( username: string, password: string, email: string, fullname: string, dni: number, address: string) => {
        try{
            let res = await apiShop.post("/api/user/signup",{username, password, email, fullname, dni, address})
            navigate("/login")
        }catch(err){
            console.log('error signup: ', err);
        }
    }

    return (
        <UserContext.Provider value={{
            user,login,signup
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;