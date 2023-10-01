import Link from "next/link";

export default function RightPrompt() {
    return (
        <div className="absolute left-0 top-3/4 -translate-x-32 flex flex-row hover:translate-x-0 transition-all duration-500 ease-in-out">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 flex  items-center">
            <Link href="" className=" text-white transition-all ">View Render</Link>
            </div>
            <div className="w-4 bg-slate-900 opacity-60"></div>
            <div className="w-6  h-16 bg-slate-900 bg-opacity-30"></div>
        </div>
    );
}
