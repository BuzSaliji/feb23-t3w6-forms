import { Component } from "react";


export default class BusinessCardForm extends Component {
	     handleChangeInput = (event) => {
        // pass in the form input data
        // call the parent setState function
        this.props.setParentState(event.target.name, event.target.value);
    }

	render(){
		return(
			<form>
                {/* htmlFor instead of for for the JSx compiler */}
				<label htmlFor="nameInput" >Name:</label>
				<input type="text" 
                name="nameInput" 
                id="nameInput" 
                value={this.props.name} 
                onChange={(event) => this.props.setParentState("name", event.target.value)}
                />
			</form>
		)
	}
}