import React from 'react'
import bgImg from "../assets/progreeBgLogoAuth.png"
import Header from '../components/auth/Header'
const AuthLayout = ({ children, header }) => {

    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[20rem] w-full space-y-8 bg-white border bg-opacity-20 px-6 py-4 pb-8 shadow-2xl">
                <img className="absolute w-[50vh] h-[82vh] opacity-20 -z-10" src={bgImg} alt="bgImg" srcSet="" />
                {header}
                {children}
            </div>
        </div>
    )
}

export default AuthLayout