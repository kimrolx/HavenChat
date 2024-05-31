//* AuthForm.tsx
import React, { ChangeEvent, useState } from "react"
import Image from "next/image"

interface AuthFormProps {
    isLoading: boolean;
    isLogin: boolean;
    loginData: { email: string; password: string };
    setLoginData: React.Dispatch<React.SetStateAction<{ email: string; password: string }>>;
    registerData: { email: string; password: string; displayName: string; };
    setRegisterData: React.Dispatch<React.SetStateAction<{ email: string; password: string; displayName: string }>>;
    handleLogin: () => void;
    handleRegister: () => void;
    handleGoogleLogin: () => void;
    handleToggle: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
    isLoading,
    isLogin,
    loginData,
    setLoginData,
    registerData,
    setRegisterData,
    handleLogin,
    handleRegister,
    handleGoogleLogin,
    handleToggle
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
        if (isLogin) {
            setLoginData({ ...loginData, [field]: e.target.value })
        } else {
            setRegisterData({ ...registerData, [field]: e.target.value })
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-slate-600 pt-0 pb-20">
            <div className="top-0 items-center justify-center text-white mt-8">
                <h1 className="text-xl p-0 m-0">
                    {isLogin ? "Login" : "Register"}
                </h1>
            </div>
        </div>
    );
}

export default AuthForm;