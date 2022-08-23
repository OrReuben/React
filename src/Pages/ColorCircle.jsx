import { useState } from "react";

function Circle() {
    const [color, setColor] = useState('')
    return (
        <div className="circle-component">
            <div className="row-centered">
                <div className={`circle ${color}`}></div>
            </div>
            <div className="button-circle-container">
                <button className="activate" onClick={() =>
                    setColor('red')}>Turn On</button>
                <button className="deactivate" onClick={() =>
                    setColor('black')}>Turn Off</button>
            </div>
        </div>
    );
}

export default Circle;
