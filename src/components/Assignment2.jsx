import React, { useEffect, useMemo, useState } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array


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