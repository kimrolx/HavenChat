"use client"

import NavBar from "@/components/NavBar";
import RegisterForm from "@/components/register_page/RegisterForm";
import { registerUser } from "@/lib/firebaseAuth";
import { useState } from "react"

export default function Register() {
    const [loading, setIsLoading] = useState(false)

    const handleRegister = async (registerData: { displayName: string; email: string; password: string; }) => {
        setIsLoading(true);
        try {
            await registerUser(registerData.displayName, registerData.email, registerData.password);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex h-svh">
            <NavBar />
            <div className="flex w-svw justify-center">
                <RegisterForm
                    isLoading={loading}
                    handleRegister={handleRegister}
                />
            </div>
        </div>
    );
}