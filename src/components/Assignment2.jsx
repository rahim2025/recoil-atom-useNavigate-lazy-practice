import React, { useEffect, useMemo, useState } from "react";

const words = ["rahim","maimona","hi","hello","bye","bd","name","is","age","protest","bike"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];

//pushing sentence
for(let i = 1; i<=TOTAL_LINES;i++){
    let sentence = "";
    for(let j =1; j<=words.length;j++){
        sentence+= (words[Math.floor(words.length*(Math.random()))])
        sentence+= " "
    }
    ALL_WORDS.push(sentence);
}

export function Assignment2 () {
    const [sentences,setSentences]= useState(ALL_WORDS);
    const [filter,setFilter] = useState("");

    const filteredSentences = useMemo(()=>{
        let filtered = sentences.filter(x => x.includes(filter));
        return filtered;

    },[filter,ALL_WORDS]
    )
    return <div>
        
        <input type="text" placeholder="Enter word" onChange={(e)=>{
            setFilter(e.target.value)
        }}  ></input>
        
        {filteredSentences.map(word => <div>
            {word}    
        </div>)}
    </div>
}