import React, { useState, useMemo } from 'react';

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    const totalValue = useMemo(()=>{
        let cost = 0;
        for(let i=0;i<items.length ;i++){
            cost = cost + items[i].value ;
            console.log(cost);
        }
        return cost ;
    },[items])
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
