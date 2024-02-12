import { useState } from "react"

export const AddCategory = ({ onNewCategory }) =>{
    const [ inputValue, setInputValue] = useState('')

    const onChangeInput = (event) => {
        setInputValue(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        //Validate at least 2 characters
        if ( inputValue.trim().length <= 1 ) return;
        // setCategories(category => [inputValue, ...category, ]) //Not pass the state to child
        onNewCategory(inputValue.trim())
        setInputValue('') //cleaning
        
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                type="text"
                placeholder="Buscar gif"
                value={inputValue }
                onChange={onChangeInput}
                
                />
        </form>
    )
}