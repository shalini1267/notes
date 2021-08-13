import React from 'react';
import db from "../firebase"

function Form({ inputText, setInputText, categories }) {
    const inputTextHandler = (e) => {
        console.log("value", e.target.value);
        setInputText(e.target.value);
    }

    const clickHandler = () => {
        if (inputText !== "") {
            if (!categories.includes(inputText)) {
                db.collection("Categories").doc(inputText).set({
                    Notes: "",
                    id: Math.floor(Math.random() * 1000)
                })
                    .then(() => {
                        console.log("Document written ");
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
            }
            else {
                alert("This Category already exist");
            }
            setInputText("");
        }
    }
    return (
        <div className="input-style">
            <input value={inputText} onChange={inputTextHandler} type='text' />
            <button onClick={clickHandler}>Add category</button>
        </div>

    );
}

export default Form;