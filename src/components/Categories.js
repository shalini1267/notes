import React from "react"
import Category from "./Category";

function Categories({ categories, activeCategory, setActiveCategory }) {

    return (
        <div className="category-style">
            {categories.map(category => (
                <Category category={category} key={category} id={category} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            ))}
        </div>
    );
}

export default Categories;