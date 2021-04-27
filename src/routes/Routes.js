import React, {useContext, useEffect} from 'react'
import {UserContext} from'../shared/provider/UserProvider'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomePage} from '../pages/HomePage'
import {GalleryPage } from '../pages/navigationtabpages/GalleryPage'
import { NewsPage } from '../pages/navigationtabpages/NewsPage'
import { ShopPage } from '../pages/navigationtabpages/ShopPage'
import { SignInPage } from '../pages/navigationtabpages/SignInPage'
import { ProfilePage} from'../pages/profiledropdownpages/ProfilePage'
import { SettingsPage} from '../pages/profiledropdownpages/SettingsPage'
import { SavedProductsPage} from'../pages/profiledropdownpages/SavedProductsPage'

import RoutingPath from './RoutingPath'

export const Routes = ({children}) => { 
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

   const blockRouteIfAuthenticated =(navigateToPageIfAuthenticated:React.FC) => {
            return authenticatedUser ? HomePage : navigateToPageIfAuthenticated
} 
const authenticatedRequired = (navigateToPageIfAuthenticated: React.FC) =>{
    return authenticatedUser ? navigateToPageIfAuthenticated : SignInPage

}
const checkIfUserIsAuthenticated =()=> {
    const getLocalStorage = localStorage.getItem('username')
    if(getLocalStorage){
        setAuthenticatedUser(getLocalStorage)
    }
}
useEffect (() => {
    checkIfUserIsAuthenticated()
})

    return (
       <BrowserRouter>
           {children}          
            <Switch>
              <Route exact path ={RoutingPath.galleryPage} component = {GalleryPage}/>
              <Route exact path ={RoutingPath.newsPage} component = {NewsPage}/>
              <Route exact path ={RoutingPath.signInPage} component = {blockRouteIfAuthenticated(SignInPage)}/>
              <Route exact path ={RoutingPath.shopPage} component = {ShopPage}/>
              <Route exact path ={RoutingPath.settingsPage} component = {SettingsPage}/>
              <Route exact path ={RoutingPath.profilePage} component = {ProfilePage}/>
              <Route exact path ={RoutingPath.savedProductsPage} component = {SavedProductsPage}/>

               <Route component = {HomePage}/>
            </Switch>
        </BrowserRouter>          
    )
}
