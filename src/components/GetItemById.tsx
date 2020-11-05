import React, { ChangeEvent, Component } from 'react'
import json2list from "../Functions/JsonToList";
import { getItem } from "../Functions/APIFunctionsItem";

interface IProps {
}

interface IState {
    div: string;
    uri: string;
    userInput: number;
}

export default class GetItemById extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {
            div: '',
            uri: 'https://itemrestservice.azurewebsites.net/api/items',
            userInput: 1
        }

        this.GetItem = this.GetItem.bind(this);
    }

    render() {
        return (
            <div className="text-center">
                <h3>Get item by id</h3>
                <div className="input-group mb3">
                    <div className="input-group-prepend">
                        <label htmlFor="GetItemInput" className="input-group-text">ID</label>
                    </div>
                    <input type="number" id="GetItemInput" className="form-control" placeholder="ID" onInput={(event) => this.setState({ userInput: Number(event.currentTarget.value) })} value={this.state.userInput} />
                    <button onClick={this.GetItem} id="GetItemButton" className="btn btn-primary">Getitem by id</button>
                    <div dangerouslySetInnerHTML={{ __html: this.state.div }} className="text-center" />
                </div>
            </div>
        )
    }

    async GetItem() {
        this.setState({ div: '<div class="spinner-border text-dark" role="status"><span class="sr-only">Loading...</span></div>' })
        const response = await getItem(this.state.uri, Number(this.state.userInput));
        this.setState({ div: `<h1>Item with id: ${this.state.userInput}</h1>${json2list(response.data)}`, userInput: 1 })
    }
}