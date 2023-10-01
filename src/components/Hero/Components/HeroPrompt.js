import Link from "next/link";

export default function HeroPrompt() {
    return (
      <div className="flex flex-row max-w-lg h-52 bg-slate-900 bg-opacity-30
      relative left-44 top-96 rounded-lg flex-1
        justify-evenly items-center align-middle">
        <div className="rounded-full bg-slate-200 w-40 h-40"></div>
        <div
            className=" flex flex-col  justify-between [&>*]:my-2"
        >
            <div className="font-semibold text-xl text-slate-200 ">
              <div>Artist of the Day</div>
                <div className="font-light text-sm">#1 @aditya</div>
            </div>
                <Link
                href="/ranks"
                className="block bg-blue-500
                  px-6 py-3 rounded-md
                     text-white transition-all duration-1000
                      hover:bg-slate-900 " >Explore Ranks</Link>
        </div></div>
    );
}
