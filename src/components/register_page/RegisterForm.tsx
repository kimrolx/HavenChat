import { useRouter } from "next/navigation";
import { useState } from "react";

interface RegisterFormProps {
    isLoading: boolean;
    handleRegister: (registerData: { displayName: string; email: string; password: string; }) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
    isLoading,
    handleRegister,
}) => {
    const router = useRouter();
    const [registerData, setRegisterData] = useState({ email: "", password: "", displayName: "" })

    const handleSubmit = () => {
        handleRegister(registerData);
    }

    return (
        <div className="flex h-svh w-4/12 items-center justify-center text-black dark:text-white">
            <div className="flex flex-col p-2.5 rounded-3xl h-3/5 w-8/12 bg-white bg-clip-padding bg-opacity-10 shadow-2xl ">
            <div className="flex justify-center">
                    <h1 className="text-4xl font-semibold p-0 mb-6"> Create an account</h1>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;
