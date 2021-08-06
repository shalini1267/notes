import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Categories from './components/Categories';
import db from "./firebase"
import Notes from "./components/Notes"

function App() {

  const [inputText, setInputText] = useState("");
  const [categories, setCategory] = useState([]);
  const [notes, setNotes] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  const ref = db.collection("Categories");
  const GetCategory = () => {
    ref.onSnapshot((querySnapshot) => {
      const arr = [];
      const notes_arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.id);
        notes_arr.push(doc.data());
      });
      setCategory(...categories, arr);
      setNotes(...notes, notes_arr);
    });
  }

  useEffect(() => {
    GetCategory();
  }, []);

  return (
    <div className="container">
      <div className="category">
        <Form inputText={inputText} setInputText={setInputText} categories={categories} setCategory={setCategory} />
        <Categories categories={categories} notes={notes} setNotes={setNotes} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>
      <div className="notes">
        <div>Notes</div>
        <Notes notes={notes} setNotes={setNotes}  activeCategory={activeCategory} />
      </div>
    </div>
  );
}

export default App;
