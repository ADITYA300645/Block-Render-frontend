import React, { useRef, useState } from "react";

function IndexPrompt() {
    const [index, setIndex] = useState(0);

    function changeindex(index) {
        setIndex(index);
    }
    return (
        <div className="flex justify-center absolute bottom-10 left-2/4 [&>*]:mx-2">
            <div
                className={
                    index == 0
                        ? "rounded-full w-3 h-3 border-2 border-white hover:cursor-pointer bg-white"
                        : "rounded-full w-3 h-3 border-2 border-white hover:cursor-pointer "
                }
                onClick={()=>changeindex(0)}
            ></div>
            <div
                className={
                    index == 1
                        ? "rounded-full w-3 h-3 border-2 border-white hover:cursor-pointer bg-white"
                        : "rounded-full w-3 h-3 border-2 border-white hover:cursor-pointer "
                }
                onClick={()=>changeindex(1)}
            ></div>
            <div
                className={
                    index == 2
                        ? "rounded-full w-3 h-3 border-2 border-white hover:cursor-pointer bg-white"
                        : "rounded-full w-3 h-3 border-2 border-white hover:cursor-pointer "
                }
                onClick={()=>changeindex(2)}
            ></div>
        </div>
    );
}

export default IndexPrompt;
