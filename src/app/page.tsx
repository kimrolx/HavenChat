"use client"
import { useState } from "react";

import AuthForm from "@/components/landing_page/AuthForm";
import Header from "@/components/landing_page/Header";
import NavBar from "@/components/NavBar";
import { loginUser, loginWithGoogle } from "@/lib/firebaseAuth";

export default function Home() {
    const [loading, setIsLoading] = useState(false)

    const handleLogin = async (loginData: { email: string, password: string }) => {
        setIsLoading(true);
        try {
            await loginUser(loginData.email, loginData.password);
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
        <div className="flex h-svh flex-col">
            <NavBar />
            <div className="flex flex-row">
                <AuthForm
                    isLoading={loading}
                    handleLogin={handleLogin}
                    handleGoogleLogin={handleGoogleLogin}
                />
                <Header />
            </div>
        </div>
    );
}
