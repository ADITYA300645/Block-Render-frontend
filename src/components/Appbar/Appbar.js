import Link from "next/link";
import { InjectedConnector } from "wagmi/connectors/injected";
import { ConnectButton } from "@web3uikit/web3";

import { sepolia, useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import { useRef } from "react";
export default function Appbar() {
    const { address, isConnected } = useAccount();
    console.log(address)
    const {data} = useBalance({address:address});
    const { disconnect } = useDisconnect();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    console.log(data);
    return (
        <div className="bg-slate-800 py-3 px-4 flex flex-row justify-between align-middle text-slate-300">
            <div className="inline  align-middle py-1 px-2 hover:text-white hover:bg-slate-500 rounded-sm cursor-none transition-all duration-500 animate-pulse">Block-Render</div>
            <div className=" inline [&>*]:mx-2  ">
                <Link href="/create" className=" hover:text-white">Create</Link>
                <Link href="/sell" className=" hover:text-white">Sell</Link>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded transition-all duration-500 "
                    onClick={() => {
                        isConnected ? disconnect() : connect();
                    }}
                >
                    {isConnected ?  `Disconnect ${address.substring(0,4)}...${address.substring(address.length-4,address.length)}` : "Connect" }
                </button>
            </div>
        </div>
    );
}
