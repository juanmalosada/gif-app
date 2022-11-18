import { useState } from "react"
import { AddCategory, GiftGrid } from "./components"


export const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState([])

    const onAddCategory = ( newCategory ) => {

        if(!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories])
        }
    }

    return (
        <>

            <h1>Buscá gifs sobre lo que quieras, escribí y apretá enter</h1>

            <AddCategory onNewCategory={ onAddCategory }/>

                {
                    categories.map( category => 
                        <GiftGrid key={category} category={ category } />
                    )
                }
            
        </>
    )
}