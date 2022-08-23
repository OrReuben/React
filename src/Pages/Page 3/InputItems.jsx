import { useState } from "react";


function InputItems() {
    const [textForArr, setText] = useState('')
    let arr = []
    return (
        <div className="input-items-component">
            <div className="input-items-container">
            <h1>Place Your Text And Hit Submit!</h1>
           <input type="text" id="text" placeholder="Write here!" />
           </div>
           <button className="submit" onClick={() =>
                    setText(document.getElementById("text"), arr.push(textForArr))}>Submit</button>
           <h1>{arr}</h1>
        </div>
    );
}

export default InputItems;