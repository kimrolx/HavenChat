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
        <div className="flex h-svh w-4/12 ml-24 mr-8 items-center justify-center text-black dark:text-white">
            <div className="flex flex-col items-center justify-center pt-0 pb-20 rounded-3xl h-3/5 w-8/12 ml-32 bg-gray-400 bg-clip-padding bg-opacity-10 shadow-2xl ">
                <div className="flex items-center justify-center mt-8">
                    <h1 className="text-4xl font-semibold p-0 mb-6"> Welcome back!</h1>
                </div>
                <div className="flex flex-col min-w-80">
                    <Input placeholder="Email" className="mb-2.5 bg-gray-200 dark:bg-white border border-gray-400 text-black" />
                    <Input placeholder="Password" className="bg-gray-200 dark:bg-white border border-gray-400 text-black" />
                    <Button variant={"default"} className="font-bold w-full mt-3.5 bg-purple-800 hover:bg-purple-700 text-lg text-white">
                        Log in
                    </Button>
                    <Button variant={"link"}>
                        Forgot your password?
                    </Button>
                    <hr className="mt-2" />
                    <div className="flex w-full mt-4 justify-center">
                        <button className="flex flex-row w-4/6 justify-center items-center p-1.5 rounded-lg border border-solid border-gray-400 dark:border-white hover:bg-purple-700 hover:text-white dark:hover:bg-white dark:hover:text-black">
                            <Image
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'%3E%3Cpath fill='%23FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3Cpath fill='%23FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/%3E%3Cpath fill='%234CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/%3E%3Cpath fill='%231976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3C/svg%3E"
                                width={35}
                                height={35}
                                alt="Google Logo"
                            />
                            <p className="ml-2">
                                Login with Google
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AuthForm;