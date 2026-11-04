
"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import CounterBroken from "./CounterBroken";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";

export default function Lab4() {
    const sayHello = (message: string) => {
        alert(message);
    };

    const sayMyName = () => {
        alert("Melanie Lochrie");
    };

    const sampleFromParent = () => {
        alert("Sample from parent");
    };

    return (
        <div id="wd-lab4">
            <h2>Lab 4</h2>

            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions
                theFunction={sayHello}
                message="Hello from Lab 4"
                sayMyName={sayMyName}
                theOtherFunction={sampleFromParent}
            />
            <CounterBroken />
            <Counter />
            <BooleanStateVariables />
        </div>
    );
}
