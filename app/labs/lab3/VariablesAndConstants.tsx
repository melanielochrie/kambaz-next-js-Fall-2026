export default function VariablesAndConstants() {
    var functionScoped = 2;
    let blockScoped = 5;

    const constant1 = functionScoped - blockScoped;
    const sampleSum = functionScoped + blockScoped;

    let visitor = "Fellow Human";
    const greeting = `Hello, ${visitor}!`;
    return (
        <div id="wd-variables-and-constants">
            <h4>Variables and Constants</h4>
            functionScoped = {functionScoped}
            <br />
            blockScoped = {blockScoped}
            <br />
            constant1 = {constant1}
            <br />
            sampleSum = {sampleSum}
            <hr />
            visitor = {visitor}
            <br />
            greeting = {greeting}
            <hr />
        </div>
    );
}