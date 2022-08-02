import { useState } from "react";
import { CounterContext } from "../Context/CounterContext";

// Use useState to keep track of the value, use the Context to share the value

export const CounterProvider = ({children}) => {

    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const increment = incrementBy => {
        setNumberOfClicks(numberOfClicks + incrementBy);
    }

    return (
        <CounterContext.Provider value={{numberOfClicks, increment}}>
            {children}
        </CounterContext.Provider>
    )
}