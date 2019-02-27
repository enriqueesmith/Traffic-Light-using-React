import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			//your state properties here
			clickedLight: null
		};
	}
	render() {
		console.log(this.state);
		let redExtraClass = " ";
		if (this.state.clickedLight == "red") redExtraClass = "selected";
		let yellowExtraClass = " ";
		if (this.state.clickedLight == "yellow") yellowExtraClass = "selected";
		let greenExtraClass = " ";
		if (this.state.clickedLight == "green") greenExtraClass = "selected";
		return (
			//return your html here
			<div className="container">
				<div className="trafficTop" />
				<div className="trafficBody">
					<div
						className={"redLight " + redExtraClass}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"yellowLight " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"greenLight " + greenExtraClass}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
