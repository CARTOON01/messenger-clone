'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { data } from "autoprefixer";
import { useCallback, useState } from "react";
import { 
    FieldValues,
    SubmitHandler,
    set,
    useForm 
} from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant , setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState:  {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            // Axios Register
        }

        if (variant === 'LOGIN') {
            // NextAuth Login
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth Social Signin
    }

    return (
        <div 
            className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md
            "
            >
                <div 
                    className="
                        bg-white
                        px-4
                        py-8
                        shadow
                        sm:rounded-lg
                        sm:px-10
                    "
                    >
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            {variant === 'REGISTER' && (
                            <Input id="name" 
                                label="Name" 
                                register={register}
                                errors={errors}
                            />
                            )}
                            <Input id="email"
                                label="Email address" 
                                type="email"
                                register={register}
                                errors={errors}
                            />
                            <Input id="password"
                                label="Password" 
                                type="password"
                                register={register}
                                errors={errors}
                            />
                            <div>
                                <Button
                                    disabled={isLoading}
                                    fullwidth
                                    type="submit"
                                >
                                    {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                                </Button>
                            </div>
                        </form>

                        <div className="mt-6">
                                <div className="relative">
                                    <div 
                                        className="
                                            absolute
                                            insert-0
                                            flex
                                            items-center
                                            justify-center"
                                    >
                                        <div 
                                            className="
                                                w-full 
                                                border-t 
                                                border-gray-300"
                                        />
                                            <div 
                                                className="
                                                    relative 
                                                    flex 
                                                    justify-center
                                                    items-center
                                                    text-sm
                                            ">
                                                <span className="
                                                    px-2 
                                                    bg-white 
                                                    text-gray-500 ">
                                                Or continue with
                                                </span>
                                        </div>

                                            <div className="mt-6 flex gap-2">
                                                    <AuthSocialButton />
                                            </div>
                                    </div>   
                                </div>
                        </div>
                </div>
        </div>
    );
}

export default AuthForm;