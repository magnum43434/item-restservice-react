import { AxiosError } from 'axios';
import React, { Component } from 'react'
import { deleteItem } from "../Functions/APIFunctionsItem";


interface IProps {
}

interface IState {
    div: string;
    uri: string;
    userInput: number;
}

export default class DeleteItem extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            div: '',
            uri: 'https://itemrestservice.azurewebsites.net/api/items',
            userInput: 1
        }

        this.DeleteItem = this.DeleteItem.bind(this)
    }

    render() {
        return (
            <div className="text-center">
                <h3>Delete item by id</h3>
                <div className="input-group mb3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" id="basic-addon1" htmlFor="DeleteItemInput">ID</label>
                    </div>
                    <input type="number" id="DeleteItemInput" className="form-control" placeholder="ID" onInput={(event) => this.setState({ userInput: Number(event.currentTarget.value) })} value={this.state.userInput} />
                    <button onClick={this.DeleteItem} className="btn btn-primary">Delete item by id</button>
                </div>
                <div className="d-flex justify-content-center"></div>
            </div>
        )
    }

    async DeleteItem() {
        await deleteItem(this.state.uri, this.state.userInput).catch((error: AxiosError) => {
            this.setState({ div: `<div class="card text-center text-white bg-dark border-danger" style="width: 18rem;"><div class="card-header">Error</div><div class="card-body"><h5 class="card-title">${error.name}</h5><p class="card-text">${error.message}</p></div></div>` })
        })
        this.setState({ div: `<div class="card text-center text-white bg-dark border-success" style="width: 18rem;"><div class="card-header">Success</div><div class="card-body"><p class="card-text">Item with ID ${this.state.userInput} has been deleted</p></div></div>` })
    }
}
