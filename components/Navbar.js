import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
    const { data: session, status } = useSession()

    return (
        <>
            {!session && status !== 'authenticated' && (
                <button onClick={e => {
                    e.preventDefault()
                    signIn('github')
                }}
                >
                    Sign in with GitHub
                </button>
            )}
            {session && status !== 'unauthenticated' && (
                <div>
                    <button onClick={e => {
                        e.preventDefault()
                        signOut()
                    }}
                    >
                        signOut
                    </button>
                    <p>Wallets</p>
                </div>
            )}
        </>
    )
}