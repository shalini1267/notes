import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Categories from './components/Categories';
import db from "./firebase"
import Notes from "./components/Notes"

function App() {

  const [inputText, setInputText] = useState("");
  const [categories, setCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [NotesValue, setNotesValue] = useState("Select a Category");

  const ref = db.collection("Categories");
  const GetCategory = () => {
    ref.onSnapshot((querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.id);
      });
      setCategory(...categories, arr);
    });
  }

  useEffect(() => {
    GetCategory();
  }, []);

  return (
    <div className="container">
      <div className="category">
        <Form inputText={inputText} setInputText={setInputText} categories={categories} setCategory={setCategory} />
        <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>
      <div className="notes">
        <div>Notes</div>
        <Notes activeCategory={activeCategory} NotesValue={NotesValue} setNotesValue={setNotesValue} />
      </div>
    </div>
  );
}

export default App;
