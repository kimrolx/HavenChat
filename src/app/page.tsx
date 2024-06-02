"use client"
import { useState } from "react";

import AuthForm from "@/components/AuthForm";
import Header from "@/components/Header";
import { registerUser, loginUser, loginWithGoogle } from "@/lib/firebaseAuth";

export default function Home() {
    const [loginData, setLoginData] = useState({ email: "", password: ""})
    const [registerData, setRegisterData] = useState({ email: "", password: "", displayName: ""})
    const [isLogin, setIsLogin] = useState(true)
    const [loading, setIsLoading] = useState(false)

    const handleToggle = () => {
        setIsLogin(!isLogin);
    }

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            await loginUser(loginData.email, loginData.password);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleRegister = async () => {
        setIsLoading(true);
        try {
            await registerUser(registerData.email, registerData.password, registerData.displayName);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    
    const handleGoogleLogin = async () => {
        setIsLoading(true);
        try {
            await loginWithGoogle();
        } catch (error) {
            console.error(error); 
        } finally {
            setIsLoading(false); 
        }
    }

    return (
        <div className="flex h-screen flex-row">
            <AuthForm
                isLoading={loading}
                isLogin={isLogin}
                loginData={loginData}
                setLoginData={setLoginData}
                registerData={registerData}
                setRegisterData={setRegisterData}
                handleToggle={handleToggle}
                handleLogin={handleLogin}
                handleRegister={handleRegister}
                handleGoogleLogin={handleGoogleLogin}
            />
            <Header />
        </div>
    );
}
