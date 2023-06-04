import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// action creators
import { ordered, restocked } from './iceCreamSlice'

export const IceCreamView = () => {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    const [value, setValue] = useState(1)
    
    return (
        <div>
            <h2>Number of Ice Creams - { numOfIcecreams }</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>&nbsp;
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))}>Restock Ice Creams</button>
        </div>
    )
}
