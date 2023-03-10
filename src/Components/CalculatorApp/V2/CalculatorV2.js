import React from "react";
import { Component } from "react";
import Button from "./Button";
import './CalculatorV2.css';
import { Input } from "./Input";
import { ClearButton } from "./ClearButton";

class CalculatorV2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }
    }

    addToInput = val => {
        this.setState({ input: this.state.input + val });
    }

    handleEqual = () => {
        this.setState({input: eval(this.state.input)})
    }

    render() {
        return (
            <div className="calc-app">
                <div className="calc-wrapper">
                    <Input input={this.state.input} />
                    <div className="calc-row">
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={this.addToInput}>/</Button>
                    </div>
                    <div className="calc-row">
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={this.addToInput}>*</Button>
                    </div>
                    <div className="calc-row">
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.addToInput}>+</Button>
                    </div>
                    <div className="calc-row">
                        <Button handleClick={this.addToInput}>0</Button>
                        <Button handleClick={this.addToInput}>.</Button>
                        <Button handleClick={() => this.handleEqual()}>=</Button>
                        <Button handleClick={this.addToInput}>-</Button>
                    </div>
                    <div className="row">
                        <ClearButton handleClear={() => this.setState({ input: "" })}>Clear</ClearButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalculatorV2;