import { store } from "@/store/store";
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createPublicClient, http } from "viem";
import { WagmiConfig, createConfig, sepolia } from "wagmi";
export default function App({ Component, pageProps }) {
    const config = createConfig({
        publicClient: createPublicClient({
            chain: sepolia,
            transport: http(),
        }),
    });
    return (
        <WagmiConfig config={config}>
            <Provider store={store}>
                <Component {...pageProps} />
                <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
            />
            </Provider>
        </WagmiConfig>
    );
}
