import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

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
                {
                    categories.map(category =>{
                        return <GifGrid category={category} key={category}/>
                    })
                }
        </>
    )
}