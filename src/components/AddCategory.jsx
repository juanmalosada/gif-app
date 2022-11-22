import PropTypes from 'prop-types';

import { useState } from "react" 

export const AddCategory = ({ onNewCategory }) => {
    
        const [inputValue, setInputValue] = useState('')
    
        const handleInputChange = (e) => {
            setInputValue(e.target.value)
        }
    
        const handleSubmit = (e) => {
            e.preventDefault()
            if(inputValue.trim().length > 2) {
                onNewCategory(inputValue.trim())
                setInputValue('')
            }
        }
    
        return (
            <form onSubmit={handleSubmit} aria-label="form">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        )
    }

    AddCategory.propTypes = {
        onNewCategory: PropTypes.func.isRequired
    }