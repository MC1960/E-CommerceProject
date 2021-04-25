import './DesktopNavigation.css'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import {useHistory} from 'react-router-dom'
import logotype from '../../../shared/images/cabin2.svg'
import RoutingPath from '../../../routes/RoutingPath'


export const DesktopNavigation = () => {
    const [authenticatedUser, setAuthenticatedUser]=useContext(UserContext)
    const history = useHistory()

    const displayAuthUserOrSignin = () =>{
    return authenticatedUser
       ?<span className='authUserNavigation'>{authenticatedUser}</span>
       :<span className='signInButton' onClick={() => history.push (RoutingPath.signInPage)}>signin</span>
            
    }
    return (
        <div className='desktopNavigationWrapper'>
            <img className='navlogo'onClick= { () => history.push (RoutingPath.homePage)} src ={logotype} alt = {'error..'}/>
            <span className= 'newsButton'onClick={ () => history.push (RoutingPath.newsPage)}>news</span>
            <span className= 'shopButton' onClick={ () => history.push (RoutingPath.shopPage)}>shop</span>
            <span className= 'galleryButton'onClick={ () => history.push (RoutingPath.galleryPage)}>gallery</span>  
             {displayAuthUserOrSignin()}
        </div>
    )
}
