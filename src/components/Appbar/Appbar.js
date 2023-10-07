import Link from "next/link";
import { InjectedConnector } from "wagmi/connectors/injected";

import {
    sepolia,
    useAccount,
    useBalance,
    useConnect,
    useDisconnect,
} from "wagmi";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideBanner, showBanner } from "@/features/authBannerSlice";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Appbar() {
    const { address, isConnected, isConnecting } = useAccount();
    const { data } = useBalance({ address: address });
    const { disconnect } = useDisconnect();
    // connected //connect (disconnected) // loading
    var connectivityStatus = {
        connected: "disconnect",
        disconnected: "connect",
        loading: "loading...",
    };
    const [accountConnectivityStatus, setAccountConnectivityStatus] = useState(
        connectivityStatus.disconnected
    );

    const dispatch = useDispatch();

    async function login(AccountNo) {
        setAccountConnectivityStatus(connectivityStatus.loading);
        try {
            var res = await axios.post("http://localhost:8080/auth/login", {
                AccountNo,
            });
            console.log(res.data);
            if (res.data.account == "NA" || res.data == null) {
                dispatch(showBanner());
                return;
            }
            setAccountConnectivityStatus(connectivityStatus.connected);
        } catch (e) {
            setAccountConnectivityStatus(connectivityStatus.disconnected);
            console.log(e);
        }
    }

    const { connect, connectors } = useConnect({
        connector: new InjectedConnector(),
        onSuccess: () => {
            login(address);
        },
    });
    return (
        <div className="bg-slate-800 py-3 px-4 flex flex-row justify-between align-middle text-slate-300">
            <div className="inline  align-middle py-1 px-2 hover:text-white hover:bg-slate-500 rounded-sm cursor-none transition-all duration-500 animate-pulse">
                Block-Render
            </div>
            <div className=" inline [&>*]:mx-2  ">
                <Link href="/create" className=" hover:text-white">
                    Create
                </Link>
                <Link href="/sell" className=" hover:text-white">
                    Sell
                </Link>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded transition-all duration-500 "
                    onClick={() => {
                        if (
                            accountConnectivityStatus ===
                            connectivityStatus.connected
                        ) {
                            setAccountConnectivityStatus(
                                connectivityStatus.disconnected
                            ),
                                disconnect();
                        } else {
                            connect({ connector: connectors[0] });
                        }
                    }}
                >
                    {accountConnectivityStatus}{" "}
                    {accountConnectivityStatus == connectivityStatus.connected
                        ? address.substring(0, 4) +
                          "..." +
                          address.substring(address.length, address.length - 4)
                        : ""}
                </button>
            </div>
        </div>
    );
}
