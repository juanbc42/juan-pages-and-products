import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Index from './index';
import Produtos from './produtos';


//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/produtos" exact component={Produtos} />
                
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;