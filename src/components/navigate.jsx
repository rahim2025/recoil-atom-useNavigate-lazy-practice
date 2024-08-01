import { useNavigate } from "react-router-dom";

export function Navigate(){
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={()=>{
                navigate("/assignment1");
            }} >1</button>
            <button onClick={()=>{
                navigate("/assignment2");
            }} >2</button>
        </div>
    )

} 