import FilterChip from "./components/FilterChip";

export default function Filterbar() {
    return (
        <div className="py-10 px-6 justify-between flex bg-slate-800 text-white">
            <div className="border-2 border-gray-400 w-32 h-12 rounded text-center flex items-center justify-center hover:border-slate-700 hover:bg-slate-700 transition-all duration-700 hover:cursor-pointer">
                Popular
            </div>
            <div className="flex">
                <FilterChip isSelected={true}>Sexy</FilterChip>
                <FilterChip>Cool</FilterChip>
                <FilterChip>Low Poly</FilterChip>
                <FilterChip>High poly</FilterChip>
                <FilterChip>Ultra</FilterChip>
            </div>
            <div className="border-2 border-gray-400 w-32 h-12 rounded text-center flex items-center justify-center hover:border-slate-700 hover:bg-slate-700 transition-all duration-700 hover:cursor-pointer">
                filter +
            </div>
        </div>
    );
}
