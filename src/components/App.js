import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme'
import Header from "../components/ui/Header"



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={() => <div>home</div>}/>
            <Route exact path='/services' component={() => <div>services</div>}/>
            <Route exact path='/custom-apps' component={() => <div>custom-apps</div>}/>
            <Route exact path='/mobile-apps' component={() => <div>mobile-apps</div>}/>
            <Route exact path='/websites' component={() => <div>websites</div>}/>
            <Route exact path='/the-revolution' component={() => <div>revolution</div>}/>
            <Route exact path='/about' component={() => <div>about</div>}/>
            <Route exact path='/contact' component={() => <div>contact</div>}/>
            <Route exact path='/estimate' component={() => <div>estimate</div>}/>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
