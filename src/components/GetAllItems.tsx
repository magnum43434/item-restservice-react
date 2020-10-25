import React, {Component} from "react";
import './css/GetAllItems.scss'
import json2table from "../Functions/JsonToTable";
import {getItems} from "../Functions/APIFunctionsItem";

export default class GetAllItems extends Component<any, any> {
    private div = 'First . Derp'
    private uri = 'https://itemrestservice.azurewebsites.net/api/items';
    
    async GetItems() {
        this.div = '<div class="spinner-border text-dark" role="status"><span class="sr-only">Loading...</span></div>'
        const response = await getItems(this.uri);
        this.div = json2table(response.data, "table table-striped table-dark"); //table-hover
    }

    createMarkup() {
        return {
            __html: this.div    };
    };

    render() {
        return (
            <div className="text-center" id="container">
                <h3>Get all items</h3>
                <button onClick={this.GetItems} className="btn btn-primary">Get all items</button>
                <div dangerouslySetInnerHTML={this.createMarkup()} className="text-center"/>
            </div>
        )
    }
}


