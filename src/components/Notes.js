import React, {useState} from "react"
import db from "../firebase"

function Notes({ notes, setNotes, activeCategory }) {
    
    // const [TextAreaValue, setTextAreaValue] = useState("");
    // if(activeCategory){setTextAreaValue(activeCategory.Notes);}

    // console.log("Active Doc", activeDoc);
    // const TextAreaHandler = (e) => {
    //     setTextAreaValue(e.target.value);
    // }

    // const saveHandler = () => {
    //     setTextAreaValue("");
    //     var docRef = db.collection("Categories").doc(activeDoc);
    //     docRef.set({
    //         Notes: TextAreaValue
    //     })
    //     .then(() => {
    //         console.log("Document successfully written!");
    //     })
    //     .catch((error) => {
    //         console.error("Error writing document: ", error);
    //     });
    //     setTextAreaValue(TextAreaValue);
    // }
    return (
        <div>
            <h1>This is note of a category</h1>
            <textarea value={activeCategory.Notes} />
            {/* <textarea onChange={TextAreaHandler} value={activeCategory} />
            <button onClick={saveHandler}>Save</button> */}
        </div>
    );
}

export default Notes;