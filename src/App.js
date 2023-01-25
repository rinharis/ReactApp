import React from "react";
import './css/App.css';
import "./css/Counter.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Errorpage from "./Components/Errorpage";
import Calculator from "./Components/Calculator";
import Counter from "./Components/Counter";
import Pokemon from "./Components/Pokemon";
import Applications from "./Components/Applications";
import Temperature from "./Components/Temperature";
import SearchFilter from "./Components/SearchFilter";

function App() {
    return (
        <>
            <div className="main">
                <Routes>
                    {/* Home */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                    {/* Applications */}
                    <Route
                        path="/appli"
                        element={
                            <>
                                <Header />
                                <Applications />
                            </>
                        }
                    />
                     <Route
                        path="/appli/calculator"
                        element={
                            <>
                                <Header />
                                <Applications />
                                <Calculator />
                            </>
                        }
                    />
                    <Route
                        path="/appli/pokemon"
                        element={
                            <>
                                <Header />
                                <Applications />
                                <Pokemon />
                            </>
                        }
                    />
                     <Route
                        path="/appli/counter"
                        element={
                            <>
                                <Header />
                                <Applications />
                                <Counter />
                            </>
                        }
                    />
                    <Route
                        path="/appli/temperature"
                        element={
                            <>                                
                                <Header />
                                <Applications />
                                <Temperature />
                            </>
                        }
                    />
                     <Route
                        path="/appli/searchFilter"
                        element={
                            <>                                
                                <Header />
                                <Applications />
                                <SearchFilter />
                            </>
                        }
                    />
                    {/* About */}
                    <Route
                        path="/about"
                        element={
                            <>
                                <Header />
                                <About />
                            </>
                        }
                    />
                   {/* Error */}
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