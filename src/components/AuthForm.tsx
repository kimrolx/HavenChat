//* AuthForm.tsx

"use client"
import React, { ChangeEvent, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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
        <div className="flex h-svh w-4/12 ml-24 mr-8 items-center justify-center">
            <div className="flex flex-col items-center justify-center pt-0 pb-20 rounded-3xl h-3/5 w-8/12 ml-32 bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-10">
                <div className="flex items-center justify-center text-white mt-8">
                    <h1 className="text-3xl font-bold p-0 mb-4">
                        {isLogin ? "Log in" : "Register"}
                    </h1>
                </div>
                <div className="flex flex-col space-y-3 min-w-80">
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <div className="flex flex-row">
                        <Button variant={"default"} className="font-bold w-full bg-purple-800 hover:bg-purple-700">Log in</Button>
                        <Button variant={"link"} className="text-white"> Forgot your password? </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;