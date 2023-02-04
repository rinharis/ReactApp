import React, { useState, useEffect } from 'react';
import '../../css/TodoApp.css'
import Form from './Form';
import TodoList from './TodoList';

function TodoApp() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    // Only runs once
    useEffect(()=> {
        getLocalTodos();
    }, []);

    useEffect(() => {
        fiilterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const fiilterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed));
                break;
                case "uncompleted":
                setFilteredTodos(todos.filter((todo) => !todo.completed))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    const saveLocalTodos = () => {        
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const getLocalTodos = () => {
        if(localStorage.getItem("todos") === null){
            localStorage.setItem("todos", JSON.stringify([]));
        } else{
            let todoLocal = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
            setTodos(todoLocal);
        }
    }

    return (
        <div className='TodoApp'>
            <header>
                <h1>My Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
                />
            <TodoList
                setTodos={setTodos}
                todos={todos}
                filteredTodos = {filteredTodos}
            />
        </div>
    )
}

export default TodoApp;