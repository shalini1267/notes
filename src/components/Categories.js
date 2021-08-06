import React from "react"
import Category from "./Category";

function Categories({ categories, notes, setNotes, activeCategory, setActiveCategory }) {

    return (
        <div className="category-style">
            {categories.map(category => (
                <Category category={category} notes={notes} key={category} id={category} setNotes={setNotes} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            ))}
        </div>
    );
}

export default Categories;