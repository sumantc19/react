import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Searchtodo = () => {
    const [data, setData] = useState("");
    const [dueDate, setDueDate] = useState(null);
    const [items, setItems] = useState([]);
    const [completedItems, setCompletedItems] = useState([]);
    const [search, setSearch] = useState("");
    const [scale, setScale] = useState(1);
    const [selectedDate, setSelectedDate] = useState(null);

    const changeme = (e) => {
        setData(e.target.value);
    };

    const update = () => {
        if (data.trim() !== "" && selectedDate) {
            setItems((oldItems) => [...oldItems, { text: data, dueDate: selectedDate, isComplete: false }]);
            setData("");
            setSelectedDate(null);  // Reset selected date after adding the task
        }
    };

    const removeItem = (index) => {
        setItems((oldItems) => oldItems.filter((_, id) => id !== index));
    };

    const removeCompletedItem = (index) => {
        setCompletedItems((oldItems) => oldItems.filter((_, id) => id !== index));
    };

    const deleteAll = () => {
        setItems([]);
        setCompletedItems([]);
    };

    const increment = () => {
        setScale((prevScale) => prevScale + 0.1);
    };

    const decrement = () => {
        setScale((prevScale) => prevScale - 0.1);
    };

    const editItem = (index, newText) => {
        const updatedItems = [...items];
        updatedItems[index].text = newText;
        setItems(updatedItems);
    };

    const markAsComplete = (index) => {
        const itemToComplete = items[index];
        itemToComplete.isComplete = true;
        setCompletedItems((oldItems) => [...oldItems, itemToComplete]);
        removeItem(index);
    };

    const filterTasksByDate = (tasks) => {
        if (!selectedDate) return tasks;
        return tasks.filter((item) => item.dueDate && item.dueDate.toLocaleDateString() === selectedDate.toLocaleDateString());
    };

    return (
        <>
            <div className='nav' style={{ transform: `scale(${scale})`, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <button className='incbtn' onClick={increment}>+</button>
                    <button className='decbtn' onClick={decrement}>-</button>
                </div>
                <div className='main'>
                    <h1 style={{ marginLeft: "20px" }}>TO-DO list</h1>
                    <div className='main1'>
                        <input className='submain1' onChange={changeme} type="text" placeholder='Enter items' value={data} />
                        <button className='btnup' onClick={update}>Add</button>
                        <input className='submain2' type="text" placeholder='search here' onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} />
                    </div>
                    <div>
                        <ul className='ulist'>
                            {filterTasksByDate(items).filter((item) => item.text.toLowerCase().includes(search)).map((item, index) => (
                                <div style={{ display: "flex" }} key={index}>
                                    <li className='names'>
                                        {item.text} - Due: {item.dueDate ? item.dueDate.toLocaleDateString() : "No date"}
                                    </li>
                                    <button className='edit' onClick={() => editItem(index, prompt("Enter new value", item.text))}>Edit</button>
                                    <button className='delete' onClick={() => removeItem(index)}>Delete</button>
                                    <button className='complete' onClick={() => markAsComplete(index)}>Complete</button>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Completed Tasks</h4>
                        <ul className='ulist'>
                            {filterTasksByDate(completedItems).filter((item) => item.text.toLowerCase().includes(search)).map((item, index) => (
                                <div style={{ display: "flex" }} key={index}>
                                    <li className='names'>
                                        {item.text} - Due: {item.dueDate ? item.dueDate.toLocaleDateString() : "No date"}
                                    </li>
                                    <button className='delete' onClick={() => removeCompletedItem(index)}>Delete</button>
                                </div>
                            ))}
                        </ul>
                    </div>
                    {(items.length > 1 && completedItems.length > 0) && <button onClick={deleteAll}>Delete All</button>}
                </div>
                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        placeholderText="Select or filter by date"
                        className='datepicker'
                    />
                </div>
            </div>
        </>
    );
}

export default Searchtodo;
