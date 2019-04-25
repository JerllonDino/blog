import React, { Component } from "react"
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import About from "./components/About"
import bsStyles from "./components/bsStyles"
import Errs from "./components/Errs"
import Denoms from "./components/Denoms"

class App extends Component{
	render(){
		const PrivateRoute = ({component: Component, ...rest}) => (
			<Route {...rest} render={(props) => {
				const items = JSON.parse(localStorage.getItem('items'))
				if(items === null || items.isLogin === false){
					return (props.location.pathname === "/" ? <Component {...props} /> : <Redirect to="/"/>)
				}else{
					return (props.location.pathname === "/" ? <Redirect to="/home"/> : <Component {...props}/>)
				}
			}
		}
		/>
		)
		return(
			<BrowserRouter>
			<Switch>
			<PrivateRoute path="/" component={Login} exact/>
			<PrivateRoute path="/about" component={About} exact/>
			<PrivateRoute path="/home" component={Home} exact/>
			<PrivateRoute path="/bsstyles" component={bsStyles} exact/>
			<PrivateRoute path="/denomination" component={Denoms} exact/>
			<Route component={Errs} />
			</Switch>
			</BrowserRouter>
			)
	}
}


export default App