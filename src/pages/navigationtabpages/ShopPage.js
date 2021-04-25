import {useEffect,useState} from 'react'

export const ShopPage = () => {
    const [counter, setCounter]= useState(0)

    return (
        <div>
            <h1 onClick = {() => setCounter(counter + 1)}>{counter}</h1>
            <h1>This is the Shop Page</h1>
        </div>
    )
}
