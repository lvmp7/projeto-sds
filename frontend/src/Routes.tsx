import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard'

const Routes = () => {
    return (

       <BrowserRouter> 
            <Switch>
                <Route path="/" exact> <Home/></Route>
            </Switch>
            <Switch>
                <Route path="/dashboard" exact> <Dashboard/></Route>
            </Switch>
       </BrowserRouter>
    );
}

export default Routes;