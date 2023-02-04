import React, { useState, useEffect } from "react";
import './ListApp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ListApp = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [totalItemCount, setTotalItemCount] = useState(0);

    //#region actions

    // Only runs once
    useEffect(() => {
        getLocalListItems();
    }, []);

    useEffect(() => {
        calculateTotal();
        saveLocalItems();
    }, [items]);

    function handleAddButtonClick() {
        const newItem = {
            itemName: inputValue,
            quantity: 1,
            isSelected: false
        };
        const newItems = [...items, newItem];
        setItems(newItems);
        setInputValue("");
    }

    const handleQuantityIncrease = (index) => {
        const newItems = [...items];
        if (newItems[index].quantity > 9) {
            alert("Max items reached!")
            return;
        }
        newItems[index].quantity++;
        setItems(newItems);
    }

    const handleQuantityDecrease = (index) => {
        const newItems = [...items];
        if (newItems[index].quantity <= 0) {
            alert("Can't be negative!");
            return;
        }
        newItems[index].quantity--;
        setItems(newItems);
    }

    const handleDelete = (index) => {
        // setItems(items.filter(el => el.index !== index));
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    const toggleComplete = (index) => {
        const newItems = [...items];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItems(newItems);
    }

    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
        setTotalItemCount(totalItemCount);
    }

    const getLocalListItems = () => {
        if (localStorage.getItem("listAppItems") === null) {
            localStorage.setItem("listAppItems", JSON.stringify([]));
        } else {
            const items = JSON.parse(localStorage.getItem("listAppItems", JSON.stringify(items)));
            setItems(items);
        }
    }

    const saveLocalItems = () => {
        localStorage.setItem("listAppItems", JSON.stringify(items));
    }
    //#endregion

    return (
        <div className='app-background'>
            <div className='main-container'>

                <div className='add-item-box'>
                    <input
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        className='add-item-input'
                        placeholder='Add an item...'
                    />
                    <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => handleAddButtonClick()}
                    />
                </div>
                <div className='item-list'>
                    {items.map((item, index) => (
                        <div className='item-container' key={index}>
                            <div className='item-name' onClick={() => toggleComplete(index)}>
                                {item.isSelected ? (
                                    <>
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                        <span className='completed'>{item.itemName}</span>
                                    </>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={faCircle} />
                                        <span>{item.itemName}</span>
                                    </>
                                )}
                            </div>
                            <div className='quantity'>
                                {
                                    item.isSelected ? (
                                        <button onClick={() => handleDelete(index)}>
                                            <FontAwesomeIcon icon={faTrash}  />
                                        </button>
                                    ) : (
                                        <>
                                            <button>
                                                <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
                                            </button>
                                            <div>
                                                {item.quantity}
                                            </div>
                                            <button>
                                                <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
                                            </button>
                                        </>
                                    )
                                }

                            </div>
                        </div>
                    ))}
                </div>
                <div className='total'>Total : {totalItemCount}</div>
            </div>
        </div>
    );
}

export default ListApp;