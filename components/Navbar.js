import { signIn, signOut, useSession } from "next-auth/react"
import { Menu, Avatar } from "antd";

function Navbar() {
    const { data: session, status } = useSession()
    console.log(JSON.stringify(session));

    const items = [
        {
            label: 'Your Wallets',
            key: '/',
        },
        {
            icon: (<Avatar size={30} src={session.user.image} />),
            label: 'Your profile',
            key: 'profile',
        },
    ]

    const handlePageChange = (e) => {
        console.log('click ', e);
    }

    return (
        <>
            <Menu onClick={handlePageChange} mode="horizontal" items={items} />

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

export default Navbar;