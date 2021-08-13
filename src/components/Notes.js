import React, { useEffect } from "react"
import db from "../firebase"

function Notes({ activeCategory, NotesValue, setNotesValue }) {

    const GetNotes = () => {
        if (activeCategory) {
            // var notes_val=activeCategory.data().Notes;
            setNotesValue(activeCategory.data().Notes);
            console.log("Notes", NotesValue);
        }
    }

    useEffect(() => {
        GetNotes();
    }, [activeCategory]);

    const TextAreaHandler = (e) => {
        console.log("shalini before", NotesValue);
        setNotesValue(e.target.value);
        console.log("shalini", NotesValue);
    }

    const saveHandler = (e) => {
        e.preventDefault();

        console.log("Value saved", NotesValue);
        var docRef = db.collection("Categories").doc(activeCategory.id);
        docRef.set({
            Notes: NotesValue
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }

    const multipleNotesHandler = () => {
        // db.collection("Categories").doc(activeCategory.id).set({
        //     Notes: "",
        //     id: Math.floor(Math.random() * 1000)
        // })
        //     .then(() => {
        //         console.log("Document written ");
        //     })
        //     .catch((error) => {
        //         console.error("Error adding document: ", error);
        //     });
    }
    return (
        <div>
            <h1>Notes</h1>
            <button onClick={multipleNotesHandler}>+</button>
            <textarea onChange={TextAreaHandler} value={NotesValue} />
            <button onClick={saveHandler}>Save</button>
        </div>
    );
}

export default Notes;