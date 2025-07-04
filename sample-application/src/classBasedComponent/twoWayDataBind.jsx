import { Component } from "react";
import Axios from "axios";


export default class TwoWayDataBind extends Component {
    constructor() {
        super();
        this.state = {
            "id": "",
            "userName": "",
            "userAge": 0,
            "userDesignation": "",
            "userCompany": "",
            count: 0
        }

        this.updateText = this.updateText.bind(this);
        this.addEmployeeToDatabase = this.addEmployeeToDatabase.bind(this)
    }

    updateText(event) {
        var keyName = event.target.dataset.key
        var keyValue = event.target.value
        debugger;
        this.setState({
            ...this.state,
            [keyName]: keyValue
        })
    }

    addEmployeeToDatabase() {
        Axios.post("http://localhost:8000/employees", this.state).then(() => {
            this.props.getEmployeeData();
        })
    }

    render() {
        return (
            <>
                <h1>Enter User Details to Add {this.props.count}:</h1>
                <label>Enter Id of the user: </label>
                <input data-key="id" type="text" value={this.state.id} onChange={this.updateText}  /><br/><br/>

                <label>Enter userName of the user: </label>
                <input data-key="userName" type="text" value={this.state.userName} onChange={this.updateText} /><br/><br/>

                <label>Enter userAge of the user: </label>
                <input data-key="userAge" type="text" value={this.state.userAge} onChange={this.updateText} /><br/><br/>

                <label>Enter userDesignation of the user: </label>
                <input data-key="userDesignation" type="text" value={this.state.userDesignation} onChange={this.updateText} /><br/><br/>

                <label>Enter userCompany of the user: </label>
                <input data-key="userCompany" type="text" value={this.state.userCompany} onChange={this.updateText} /><br/><br/>

                <input type="button" value="Submit" onClick={this.addEmployeeToDatabase} />

                <p>{JSON.stringify(this.state)}</p>
            </>
        )
    }
}
