import React from "react";
import { Routes, Route } from "react-router-dom";
import './css/App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Errorpage from "./Components/Errorpage";
import Calculator from "./Components/CalculatorApp/Calculator";
import Counter from "./Components/Counter";
import Pokemon from "./Components/Pokemon";
import Applications from "./Components/Applications";
import Temperature from "./Components/Temperature";
import SearchFilter from "./Components/SearchFilter";
import Registration from "./Components/Registration";
import Quiz from "./Components/Quiz";
import TodoApp from "./Components/TodoApp/TodoApp";
import CalculatorV2 from "./Components/CalculatorApp/V2/CalculatorV2";
import ContactListApp from "./Components/ContactListApp/ContactListApp";
import RecipeApp from "./Components/RecipeApp/RecipeApp";
import ListApp from "./Components/ListApp/ListApp";
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import AdviceApp from "./Components/AdviceApp/AdviceApp";

function App() {
    return (
        <>
            <div className="main">
                <Routes>
                    {/* Home */}
                    <Route path="/"                     element={<><Header /><Home /></>} />
                    {/* Applications */}
                    <Route path="/appli"                element={<><Header /><Applications /></>} />
                    <Route path="/appli/calculator"     element={<><Header /><Applications /> <Calculator /> </>} />
                    <Route path="/appli/calculatorV2"   element={<><Header /><Applications /> <CalculatorV2 /> </>} />
                    <Route path="/appli/pokemon"        element={<><Header /><Applications /><Pokemon /></>} />
                    <Route path="/appli/counter"        element={<><Header /><Applications /><Counter /></>} />
                    <Route path="/appli/temperature"    element={<><Header /><Applications /><Temperature /></>} />
                    <Route path="/appli/searchFilter"   element={<><Header /><Applications /><SearchFilter /></>} />
                    <Route path="/appli/registration"   element={<><Header /><Applications /><Registration /></>} />
                    <Route path="/appli/quiz"           element={<><Header /><Applications /><Quiz /></>} />
                    <Route path="/appli/todo"           element={<><Header /><Applications /><TodoApp /></>} />
                    <Route path="/appli/list"           element={<><Header /><Applications /><ListApp /></>} />
                    <Route path="/appli/contact"        element={<><Header /><Applications /><ContactListApp /></>} />
                    <Route path="/appli/recipe"         element={<><Header /><Applications /><RecipeApp /></>} />
                    <Route path="/appli/weather"        element={<><Header /><Applications /><WeatherApp /></>} />
                    <Route path="/appli/advice"         element={<><Header /><Applications /><AdviceApp /></>} />
                    {/* About */}
                    <Route path="/about"                element={<><Header /><About /></>} />
                    {/* Error */}
                    <Route path='*'                     element={<><Errorpage /></>} />
                </Routes>
            </div>
        </>
    )
}

export default App;