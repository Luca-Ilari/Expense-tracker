import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider>
            <Navbar />
            <Component {...pageProps} />
        </SessionProvider>
    );
}