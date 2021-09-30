import React, { BaseSyntheticEvent, useState } from 'react'

const Input = () => {
    const [value, setValue] = useState('');
    const textChange = (event: BaseSyntheticEvent) => {
        setValue(event.target.value)
    }
    return (
        <>
            <input type="text" title="input" onChange={textChange} />
        </>
    )
}

export default Input
