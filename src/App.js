import React from "react";
import './App.css';
import "./Counter.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Errorpage from "./Components/Errorpage";
import Calculator from "./Components/Calculator";
import Pokemon from "./Components/Pokemon";

function App() {
    return (
        <>
            <div className="main">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/counter"
                        element={
                            <>
                                <Header />
                                <Counter />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <Header />
                                <About />
                            </>
                        }
                    />
                    <Route
                        path="/calculator"
                        element={
                            <>
                                <Calculator />
                            </>
                        }
                    />
                    <Route
                        path="/pokemon"
                        element={
                            <>
                                <Pokemon />
                            </>
                        }
                    />
                    <Route
                        path='*'
                        element={
                            <>
                                <Errorpage />
                            </>
                        }
                    />
                </Routes>
            </div>
        </>
    )
}

export default App;