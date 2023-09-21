import {Component} from "react";

import BusinessCardDisplay from "./BusinessCardDisplay";
import BusinessCardForm from "./BusinessCardForm";

export default class BusinessCardParent extends Component {
	constructor(){
		super();

        this.state = {
            editMode: false,
            name: "example name",
            email: "example@email.com"
        }
	}


    /**
	 * Description placeholder
	 *
	 * @param stateKeyId - String, should match a key in this.state for BusinessCardParent.
	 * @param newStateValue - String, should be the new value we want to set for the state key in BusinessCardParent.
	 */

    updateState = (stateKeyId, newStateValue) => {
        this.state({
            [stateKeyId]: newStateValue
        })

        // updateState("name", "some new name");
        // updateState("email", some new email);
    }

	render(){
		if (this.state.editMode){
            return(
                <BusinessCardForm  
                name={this.state.name} 
                email={this.state.email} 
                setParentState={this.updateState}
                
                />
            )

        }else{
            return(
                <div>
                    <BusinessCardDisplay 
                    name={this.state.name}
                    email={this.state.email}
                    />
                </div>
            )

        }
		
	}
}

// import elephant from "react";
// class BlahBlah extends elephant.Component {
// 	constructor(){

// 	}
// }