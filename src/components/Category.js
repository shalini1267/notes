import React from "react"
import db from "../firebase"

function Category({ category, notes, setNotes, id, activeCategory, setActiveCategory }) {

    var docRef = db.collection("Categories").doc(id);
    const NotesHandler = () => {
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setActiveCategory(doc.data());
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    };

    return (
        <div key={id} className="list-style" onClick={NotesHandler} >{category}</div>
    );
}

export default Category;