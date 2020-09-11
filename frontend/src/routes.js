import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Projetos from './pages/Projetos/Projetos';
import Sobre from './pages/Sobre/Sobre';
import Admin from './pages/Admin/Admin';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projetos" component={Projetos} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/admin" component={Admin} />
            
        </Switch>    
    </BrowserRouter>
);