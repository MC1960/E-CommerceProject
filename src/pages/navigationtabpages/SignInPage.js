import {useContext, useState} from 'react'
import {UserContext} from '../../shared/provider/UserProvider'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const SignInPage = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const[authenticatedUser, setAuthenticatedUser]=useContext(UserContext)
    
    const signIn =() => {
        setAuthenticatedUser (username)
        localStorage.setItem ('username', username)
        setAuthenticatedUser(username)
        history.push(RoutingPath.homePage)

    }

    return (
        <div>
           <span>Username</span><input onChange={event => setUsername(event.target.value)}/><br/>
           <button onClick ={()=> signIn()}>Sign In</button>
        </div>
    )
    
}
