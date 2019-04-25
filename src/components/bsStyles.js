import React from "react"
import Navigation from "./Navigation"
import imgg from "./img/wallhaven-56559.jpg"
import $ from "jquery"

class bsStyles extends React.Component{

	render(){
		var tbl = false
		$("#btnTable").click(function(){
			console.log("clicked")
			if(tbl === true){
				$("#tableChange").removeClass()
				$("#tableChange").addClass("table-striped")
				tbl = false
			}else{
				$("#tableChange").removeClass()
				$("#tableChange").addClass("table")
			}
		})
		return(
			<div>
			<Navigation />
			<div className="container">
			<div className="row">
			<div className="col-12 bgc">
			<h1 className="text-center">BS Tables</h1>
			<div className="table-responsive">
			<table className="table" id="tableChange">
			<thead>
			<tr>
			<th>First Name</th>
			<th>Middle Name</th>
			<th>Last Name</th>
			<th>Age</th>
			<th>Gender</th>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td>James</td>
			<td>Rojas</td>
			<td>Diño</td>
			<td>20</td>
			<td>Male</td>
			</tr>
			<tr>
			<td>Ronald</td>
			<td>Taddeaus</td>
			<td>Wesley</td>
			<td>17</td>
			<td>Male</td>
			</tr>
			<tr>
			<td>Billie</td>
			<td>Eilish</td>
			<td>O'Conell</td>
			<td>17</td>
			<td>Female</td>
			</tr>
			</tbody>
			</table>
			<button className="btn btn-primary" id="btnTable">Change</button>
			</div>
			</div>

			</div>
			<div className="row">
			<div className="col-12 bgc">
			<h1 className="text-center">Responsive Images</h1>
			<div>
			<img src={imgg} className="img-fluid p-2 img-thumbnail" alt="Res"/>
			</div>
			</div>
			</div>
			<div className="row">
			<div className="col-12 bgc">
			<h1 className="text-center">Alerts</h1>
			<div>
			<div className="alert alert-primary">This Alert Primary<span className="badge badge-secondary float-right">8</span></div>
			<div className="alert alert-danger">When Danger happens</div>
			<div className="alert alert-secondary">AlEERT SGUnDO!</div>
			<div className="alert alert-success">Alert Success</div>
			<div className="alert alert-warning">Warning Alert</div>
			<div className="alert alert-dark">The Dark SIde</div>
			</div>

			</div>

			</div>
			</div>
			</div>
			)
	}
}

export default bsStyles