import {Link} from "@remix-run/react";
import UserAuthForm from "~/components/ui/loginForm";

export const loader = () => {
    return null
}
const Login = () => {
    return (
        <>
            <div
                className="container relative h-[800px] flex flex-col align-middle items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <UserAuthForm/>
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                to={"/"}
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                to={"/"}
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login