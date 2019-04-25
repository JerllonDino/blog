import React from "react"
import Header from "./Header"
import Navigation from "./Navigation"
import img from "./img/wallhaven-224990.jpg"

const Home = () => (
	<div>
	<Navigation />
		<div className="container">
			<Header title="Home" />
			<div className="row">
				<div className="col-sm-12 col-md-8 col-lg-8 bgc">
					<h1 className="text-center">Contains</h1>
					</div>
				<div className="col-md-4 col-lg-4 d-none d-md-block bgc">
					<h1 className="text-center">Side Contains</h1>
					<div className="card mx-auto" style={{width: "80%"}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary">Go somewhere</button>
  </div>
  </div>

				</div>
			</div>
		</div>
	</div>
	)

export default Home