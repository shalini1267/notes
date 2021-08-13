import React from "react"
import db from "../firebase"

function Category({ category, id, setActiveCategory }) {

    var docRef = db.collection("Categories").doc(id);
    const NotesHandler = () => {
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc);
                setActiveCategory(doc);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    };

    const deleteHandler = () => {
        db.collection("Categories").doc(id).delete().then(() => {
            console.log("Document successfully deleted!", id);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <div key={id} className="list-style" onClick={NotesHandler} >{category}<button className="button-style" onClick={deleteHandler}>-</button></div>
    );
}

export default Category;