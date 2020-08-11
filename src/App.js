import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import {Link,Route,Switch, BrowserRouter} from "react-router-dom";
import  store  from "./redux/store";
import { Provider } from "react-redux";

export default class App extends React.Component {
  render(){
  return (
      
      <BrowserRouter>
      <Provider store={store}>
        <div>
        <Switch>
        <Route path = "/register" component=  {Register} />
        <Route path="/" exact render={(props)=>(<Login {...props}/>)}/>
        <Route path="/dashboard" exact render={(props)=>(<Dashboard {...props}/>)}/>
        </Switch>
        </div>
        </Provider>
        </BrowserRouter>
  );
}
}