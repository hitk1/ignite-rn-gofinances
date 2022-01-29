import React, { createContext, ReactNode, useContext, useState } from 'react'
import *  as AuthSession from 'expo-auth-session'
const { CLIENT_ID } = process.env
const { REDIRECT_URL } = process.env


interface IAuthProviderProps {
    children: ReactNode
}

interface IUser {
    id: string
    name: string
    email: string
    photo?: string
}

interface IAuthContextData {
    user: IUser,
    signInWithGoogle: () => Promise<void>
}

interface IAuthorizationResponse {
    params: {
        access_token: string
    },
    type: string
}

export const AuthContext = createContext({} as IAuthContextData)

const AuthProvider = ({ children }: IAuthProviderProps) => {
    const [user, setUser] = useState<IUser>({} as IUser)

    const signInWithGoogle = async () => {
        try {
            const RESPONSE_TYPE = 'token'
            const SCOPE = encodeURI('profile email')
            console.log(CLIENT_ID, REDIRECT_URL)

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            const { params, type } = await AuthSession.startAsync({ authUrl }) as IAuthorizationResponse

            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
                const userInfo = await response.json()

                setUser({
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.given_name,
                    photo: userInfo.picture
                })

                console.log(userInfo)
            }
        } catch (error) {
            throw new Error(error as any)
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            signInWithGoogle,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }