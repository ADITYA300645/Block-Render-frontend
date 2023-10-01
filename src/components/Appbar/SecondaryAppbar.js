import Link from "next/link";
import React from "react";

function SecondaryAppbar() {
function handleScroll(v){
    console.log(v);
}

    return (
        <div className="bg-slate-800 py-3 px-4 flex flex-row justify-between align-middle text-slate-300 sticky top-0"
        >
            <div className="inline  align-middle py-1 px-2 hover:text-white hover:bg-slate-500 rounded-sm cursor-none transition-all duration-500 animate-pulse">
                Block-Render
            </div>
            <div className=" inline [&>*]:mx-2  ">
                <div class="relative text-gray-600 transition-all duration-1000 focus-within:text-gray-400 inline-block w-64">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button
                            className="p-1 focus:outline-none focus:shadow-outline"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                class="w-6 h-6"
                            >
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </span>
                    <input
                        className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-64"
                        placeholder="Search..."
                    />
                </div>
                <Link href="" className=" hover:text-white">
                    Create
                </Link>
                <Link href="" className=" hover:text-white">
                    Store
                </Link>
            </div>
        </div>
    );
}

export default SecondaryAppbar;
