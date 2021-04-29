import React, { useState } from 'react'
import StarWarsAPIService from '../../shared/api/service/StarWarsAPIService'

import './GalleryPage.css'

export const GalleryPage = () => {
    const [data, setData]= useState()
    const[characterID, setCharacterID] = useState('')
   
    const fetchData=()=> {
        StarWarsAPIService.getStarWarsCharacter(characterID)
             .then(response => {setData(response)})
             .catch(error => {console.log(error)})
     
}       
    return (
        <div class= "gallery">
            <button onClick = {()=> fetchData()}>Api Call</button>
            <button onClick ={() => console.log(data)}>check my state</button>
            <input placeholder='search for character ID'
				onChange={event => setCharacterID(event.target.value)} />
            <h1 class="headline">STARWARS</h1>
            <h1>name: {data?.data.name}</h1>
            <h1>hair color: {data?.data.hair_color}</h1>
            <h1>gender: {data?.data.gender}</h1>
            <h1>height: {data?.data.height}</h1>  
        </div>
    )
}
