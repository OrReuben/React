import { useState } from "react"

function Counter() {
    const [number, setNumber] = useState(1)
    console.log(number)
    // <i class="fa-solid fa-plus"></i>
    return (
        <div className="counter-component">
            <h1>{number}</h1>
            <div className="button-counter-container">
                <button onClick={() =>
                    setNumber(number + 1)}>Add</button>
                <button onClick={() =>
                    setNumber(number - 1)}>Sub</button>
                <button onClick={() =>
                    setNumber(1)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;