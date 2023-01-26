import React,{useRef, useState} from "react";
import Calculate from "./calculate";

export default function Calculator(){
    const [val, setVal] = useState('');

    const inputRef = useRef();
    const submitHandler=(e,)=>{
        e.preventDefault();
        let result = Calculate(inputRef.current.value);
        console.log(result);
        setVal(JSON.stringify(result));
    }

    return(
        <div className="calcMain">

            <form onSubmit={submitHandler} className="formOnSubmit">
                <input ref={inputRef} className="inputText_calc" placeholder="Enter the Expression here"/>
                <button type="submit" className="btn">Calculate</button>
            </form>
            <p className="answerlabel">Answer : <b>{val}</b></p>

        </div>
    );
}