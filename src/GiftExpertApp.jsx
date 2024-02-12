import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GiftExpertApp = () => {
    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball'])
    console.log(categories)

    const addCategory = (inputValue) => {
        if ( categories.includes(inputValue) ) return;
        setCategories(categories => [inputValue, ...categories ])
    }

    return(
        <>
            <h1>Gift Exchange</h1>
            {/* <AddCategory setCategories= {setCategories} /> */}
            <AddCategory onNewCategory = {addCategory} />
            <ol>
                {
                    categories.map(category =>{
                        return <li key={category}>
                            {category}
                        </li>
                    })
                }
            </ol>
        </>
    )
}