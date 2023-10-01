import Image from "next/image";
import React from "react";

function Card() {
    return (
        <div className="m-2 flex flex-col w-80 h-64">
            <div className=" bg-gradient-to-r from-pink-500 to to-blue-500 w-80 h-72 rounded-lg"></div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row text-center items-center justify-center [&>*]:mx-1 [&>*]:my-1 pt-2 ">
                    <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                    <div>name</div>
                </div>
                <div className="flex flex-row items-center justify-center [&>*]:mx-1 [&>*]:my-1 pt-2">
                    <Image
                        src="/assets/heart.svg"
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />
                    <div>24k</div>
                    <Image
                        src="/assets/eye.svg"
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />
                    <div>24k</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
