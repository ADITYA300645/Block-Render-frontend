import HeroPrompt from "./Components/HeroPrompt";
import IndexPrompt from "./Components/IndexPrompt";
import RightPrompt from "./Components/RightPrompt";

export default function Hero() {
    return <div className=" min-h-screen bg-gradient-to-r from-slate-600 to-emerald-700 overflow-x-hidden">
        <HeroPrompt/>
        <RightPrompt/>
        <IndexPrompt/>
    </div>
}
