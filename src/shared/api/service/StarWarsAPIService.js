import http from '../StarWarsAPI'


const getStarWarsCharacter = (id:number) => {
    return http.get(`/people/${id}`)
  
}

export default{
    getStarWarsCharacter
}