import React, { Component } from "react";
import json2table from "../Functions/JsonToTable";
import { getItems } from "../Functions/APIFunctionsItem";

interface IProps {
}

interface IState {
    div: string;
    uri: string;
}

export default class GetAllItems extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {
            div: '',
            uri: 'https://itemrestservice.azurewebsites.net/api/items'
        }

        this.GetItems = this.GetItems.bind(this);
    }

    render() {
        return (
            <div className="text-center" id="container">
                <h3>Get all items</h3>
                <button onClick={this.GetItems} className="btn btn-primary">Get all items</button>
                <div dangerouslySetInnerHTML={{ __html: this.state.div }} className="text-center" />
            </div>
        )
    }
    async GetItems() {
        this.setState({ div: '<div class="spinner-border text-dark" role="status"><span class="sr-only">Loading...</span></div>' })
        const response = await getItems(this.state.uri);
        this.setState({ div: json2table(response.data, "table table-striped table-dark") }) //table-hover
    }
}


