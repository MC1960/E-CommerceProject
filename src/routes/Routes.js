import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomePage} from '../pages/HomePage'
import { GalleryPage } from '../pages/navigationtabpages/GalleryPage'
import { NewsPage } from '../pages/navigationtabpages/NewsPage'
import { ShopPage } from '../pages/navigationtabpages/ShopPage'
import { SignInPage } from '../pages/navigationtabpages/SignInPage'
import RoutingPath from './RoutingPath'

export const Routes = ({children}) => {
    return (
       <BrowserRouter>
           {children}          
            <Switch>
              <Route exact path ={RoutingPath.galleryPage} component = {GalleryPage}/>
              <Route exact path ={RoutingPath.newsPage} component = {NewsPage}/>
              <Route exact path ={RoutingPath.signInPage} component = {SignInPage}/>
              <Route exact path ={RoutingPath.shopPage} component = {ShopPage}/>
               <Route component = {HomePage}/>
            </Switch>
        </BrowserRouter>          
    )
}
