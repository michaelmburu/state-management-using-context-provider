import { useContext, useState } from "react";
import { CounterContext } from "./Context/Context/CounterContext";

// Call numberOfClicks and increment function from context
// General rule, always store values to be shared across components in the context
export const CounterButton = () => {
    const {numberOfClicks, increment} = useContext(CounterContext);
    const [incrementBy, setIncrementBy] = useState(1);
    return (
        <>
            <p>You have clicked the button {numberOfClicks}</p>
            <label>Increment By </label>
            <input type="number" value={incrementBy} onChange={e => setIncrementBy(Number(e.target.value))} />
            <button onClick={() => increment(incrementBy)}>Increment</button>
        </>
    )
}