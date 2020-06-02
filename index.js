import React, { Component } from 'react';
import { render } from 'react-dom';
import { useState } from 'react';

import './src/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/* Importando páginas principais*/
import Produtos from './pages/produtos.js';
import Home from './pages/home.js';
/* Importando páginas adicionais*/
import Page_Java from './pages/java.js';
import Page_Js from './pages/js.js';
import Page_PHP from './pages/php.js';
import Page_Csharp from './pages/csharp.js';
import Page_About from './pages/about.js';

/* Importando components */
import Menu from './components/menu.js'

function App() {
  return (
   
   <Router>
    <Menu/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/produtos" component={Produtos} />
      <Route exact path="/java" component={Page_Java} />
      <Route exact path="/js" component={Page_Js} />
      <Route exact path="/php" component={Page_PHP} />
      <Route exact path="/csharp" component={Page_Csharp} />
      <Route exact path="/about" component={Page_About} />
    </Switch>
    
    </Router>
  );
}

render(<App />, document.getElementById('root'));
