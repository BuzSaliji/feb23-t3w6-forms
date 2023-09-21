import {Component} from "react";

import BusinessCardDisplay from "./BusinessCardDisplay";

export default class BusinessCardParent extends Component {
	constructor(){
		super();

        this.state = {
            editMode: false,
            name: "example name",
            email: "example@email.com"
        }
	}

	render(){
		if (this.state.editMode){

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