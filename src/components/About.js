import React from "react"
import Header from "./Header"
import Navigation from "./Navigation"

const About = () => (
	<div>
	<Navigation/>
	<div className="container">
	<Header title="About" />
		<div className="row">
			<div className="col-sm-12 col-md-8 col-lg-8 bgc">
				<h1 className="text-center">Contains</h1>
				</div>
			<div className="col-md-4 col-lg-4 d-none d-md-block bgc">
				<h1 className="text-center">Side Contains</h1>
			</div>
		</div>
	</div>
	</div>
	)

export default About