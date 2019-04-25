import React, {Component} from "react"

class Login extends Component{
	state = {
		username: "",
		password: "",
		isLogin: false
	}
	handleChange = event => {
		const {name, value} = event.target
		this.setState({[name]:value})
		
	}
	onLogin = (e) => {
		e.preventDefault()
		const {username, password} = this.state
		this.setState( prevState => {
			if(username === "Admin"){
				if(password === "1234"){
					prevState.isLogin = true
					this.props.history.push('/home')
				}else{
					prevState.isLogin = false
				}
			}else{
				prevState.isLogin = false
			}
			let st = {...prevState}
			delete st.password
			localStorage.setItem("items",JSON.stringify(st))
			return prevState

		})
		
	}
	render(){
		return(
			<div className="container">
			<div className="row">
			<div className="col"></div>
			<div className="col-10 col-lg-6 shadow mt-5 rounded bgc">
			<h2 className="text-center p-3">The Social Network</h2>
			<form onSubmit={this.onLogin}>
			<div className="form-group">
			<input 
			name="username"
			type="text"
			id="usern"
			className="form-control border-0 my-3"
			value={this.state.username}
			onChange={this.handleChange}
			required
			/>
			<label className="form-control-placeholder" htmlFor="usern">Username</label>
			</div>
			<div className="form-group">
			<input
			name="password"
			type="password"
			id="pass"
			className="form-control border-0 my-4"
			value={this.state.password}
			onChange={this.handleChange}
			required
			/>
			<label className="form-control-placeholder" htmlFor="pass">Password</label>
			</div>
			<div className="text-center py-4 mt-3">
			<button className="btn btn-outline-dark">Login</button>
			</div>
			</form>
			
			</div>
			<div className="col"></div>
			</div>
			</div>
			)
	}

}

export default Login