import React from "react";
import "../../css/Calculator.css";
import { useState } from "react";

function Calculator() {
    const [result, setResult] = useState('');

    const clickhandler = (event) => {
        setResult(result.concat(event.target.value));
    };

    const cleardisplay = () => {
        setResult('');
    }

    const calculate = () => {
        setResult(eval(result).toString());
    }

    return (
        <>
            <div className="calc">
                <input type="text"  id="answer" placeholder={result} />
                <input type="button" value="7" className="button" onClick={clickhandler} />
                <input type="button" value="8" className="button" onClick={clickhandler} />
                <input type="button" value="9" className="button" onClick={clickhandler} />
                <input type="button" value="/" className="button" onClick={clickhandler} />
                <input type="button" value="4" className="button" onClick={clickhandler} />
                <input type="button" value="5" className="button" onClick={clickhandler} />
                <input type="button" value="6" className="button" onClick={clickhandler} />
                <input type="button" value="*" className="button" onClick={clickhandler} />
                <input type="button" value="1" className="button" onClick={clickhandler} />
                <input type="button" value="2" className="button" onClick={clickhandler} />
                <input type="button" value="3" className="button" onClick={clickhandler} />
                <input type="button" value="-" className="button" onClick={clickhandler} />
                <input type="button" value="." className="button" onClick={clickhandler} />
                <input type="button" value="0" className="button" onClick={clickhandler} />
                <input type="button" value="%" className="button" onClick={clickhandler} />
                <input type="button" value="+" className="button" onClick={clickhandler} />
                <input type="button" value="Clear" className="button1" onClick={cleardisplay} />
                <input type="button" value="=" className="button1" onClick={calculate} />
            </div>
        </>
    );
}
export default Calculator;