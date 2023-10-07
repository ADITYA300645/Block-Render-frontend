import { useEffect } from "react";
import Card from "../card/Card";


export default function Cards() {
    // var data = await getData();
    // console.log(data);
    
    return (
        <div className="flex justify-center items-center pt-12">
            <div className="grid grid-cols-4 gap-x-10 gap-y-12 justify-center items-center ">
                <Card name="LOL" likes={0} views={0}></Card>
            </div>
        </div>
    );
}

 Cards;
