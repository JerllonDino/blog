import React from "react"

const Header = props => (
	<div className="row">
		<div className="col-12">
			<h1 className="text-center">{props.title}</h1>
		</div>
	</div>
)

export default Header