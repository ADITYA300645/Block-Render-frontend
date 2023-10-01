export default function FilterChip(props) {
    return (
        <div
            className={
                props.isSelected
                    ? "bg-slate-500 px-4 py-2 rounded mx-2 flex text-center justify-center items-center hover:bg-slate-600 hover:cursor-pointer"
                    : "bg-slate-800 px-4 py-2 rounded mx-2 flex text-center justify-center items-center hover:bg-slate-500 hover:cursor-pointer"
            }
        >
            {props.children}
        </div>
    );
}
