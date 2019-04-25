import React from "react"

const Denoms = () => {
	let inp = parseFloat(prompt("Money : "))
	let denoms = [1000, 500, 200, 100, 50, 20, 10, 5, 1, 0.25]
	let res = ""
	let temp = 0

	for(let i in denoms){
		let denom = denoms[i]
		temp = Math.floor(inp / denom)

		inp = inp - (temp * denom)
		res += denom + " : " + temp + '\n'
	}
	console.log(res)
	return(
		<h1>{res}</h1>		
	)
}
	

export default Denoms