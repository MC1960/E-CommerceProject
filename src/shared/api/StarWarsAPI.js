import Axios from 'axios'

const API_URL = 'https://swapi.dev/api'

const StarWarsAPI = Axios.create ({
    baseURL:API_URL,
    headers: {'Content-Type' : 'application/json'}
})

export default StarWarsAPI