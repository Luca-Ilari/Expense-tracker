import { signIn, signOut } from "next-auth/react"

export default function Login() {
    return (
        <>
            <center>
                <p>login</p>
                <button onClick={e => {
                    e.preventDefault()
                    signIn('github')
                }}
                >
                    Sign in with GitHub
                </button>

                <button onClick={e => {
                    e.preventDefault()
                    signOut()
                }}
                >
                    signOut
                </button>
            </center>
        </>
    )
}