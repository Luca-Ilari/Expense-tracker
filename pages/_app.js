//import 'bootstrap/dist/css/bootstrap.css'
import { NextUIProvider, createTheme } from '@nextui-org/react';
import '../style.css'

const darkTheme = createTheme({type: "dark"});

export default function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider theme={darkTheme}>
            <Component {...pageProps} />
        </NextUIProvider>
    );
}