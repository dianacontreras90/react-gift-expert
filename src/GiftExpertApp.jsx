import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    // categories.push(newCategory);
    if ( categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories ]);
    // setCategories( cat => [...cat, 'valiente']);
  }

  return (
    <>

      <h1>GiftExpertApp</h1>


      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />


      {
        categories.map( ( category ) => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }



    </>
  )
}
