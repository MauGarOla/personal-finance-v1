import React from "react"

const CurrenciesEditor = () => {

    const handleSubmit = () => {
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <button type="submit">+</button>
            <input 
                type="text"
                required 
            />
        </form>
    )
}

export default CurrenciesEditor