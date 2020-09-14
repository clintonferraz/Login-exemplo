import React from 'react';
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Projetos from './pages/Projetos/Projetos';
import Sobre from './pages/Sobre/Sobre';
import Admin from './pages/Admin/Admin';
import AdminPanel from './pages/AdminPanel/AdminPanel';



var isAuthenticated = false;
if(localStorage.tolken)
    isAuthenticated=true;
else
    isAuthenticated=false;




const PrivateRoute = ({ component: Component, ...rest }) => {

    return(
        <Route 
            { ... rest}
            render={props => {

                    if(isAuthenticated){
                        return <Component { ... props} />
                    }else{
                        return <Redirect to={{ pathname: "/admin", state: { from: props.location} }} />
                    }
                }
            }
        />
    )

};

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projetos" component={Projetos} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/admin" exact component={Admin} />
            <PrivateRoute path="/adminpanel" exact component={AdminPanel} />
            
        </Switch>    
    </BrowserRouter>
);