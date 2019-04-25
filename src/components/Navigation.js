import React from "react"
import {NavLink} from "react-router-dom"

const Navigation = () => (
	<nav className="navbar navbar-expand-lg navbar-dark">
	<div className="container">
	<NavLink className="navbar-brand mb-0 h1" to="/home">TSN</NavLink>
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	<span className="navbar-toggler-icon"></span>
	</button>
	<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	<div className="navbar-nav">
	<ul className="navbar-nav">
	<li className="nav-item">
	<NavLink className="nav-item nav-link" to="/home">Home</NavLink>
	</li>
	<li className="nav-item">
	<NavLink className="nav-item nav-link" to="/about">About</NavLink>
	</li>
	<li className="nav-item">
	<NavLink className="nav-item nav-link" to="/bsstyles">BS Styles</NavLink>
	</li>
		<li className="nav-item">
	<NavLink className="nav-item nav-link" to="/denomination">Denoms</NavLink>
	</li>
	</ul>

	</div>
	<div className="text-center ml-auto">
	<button type="button" className="btn btn-info" onClick={()=>{localStorage.clear();window.location.reload()}}>Logout</button>
	</div>
	</div>
	</div>
	</nav>
	)

export default Navigation