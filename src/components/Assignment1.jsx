import { useMemo, useState } from "react";
import { countAtom } from "./sotre/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function  Assignment1() {

    return (
        <div>
            <RecoilRoot>
             <Count />
             <Buttons/>
            </RecoilRoot>
        </div>
    )};

function Count(){
    const count = useRecoilValue(countAtom);
    return (
        <div>
            {count}
        </div>
    )
}

function Buttons(){
    let setCount = useSetRecoilState(countAtom);
    return(
    <div>
        <button onClick={()=>{
            setCount(c => c+1)
        }}>Increase </button>
        <button onClick={()=>{
            setCount(c => c-1)
        }}>Decrease </button>



</div>
)}
