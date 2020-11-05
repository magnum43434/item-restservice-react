import React, { Component } from 'react'
import { getItems, postItem } from '../Functions/APIFunctionsItem';
import item from "../Models/item";
import { AxiosError } from "axios";

interface IProps {
}

interface IState {
    div: string;
    uri: string;
    name: string;
    quality: string;
    quantity: number;
}


export default class PostItem extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)

        this.state = {
            div: '',
            uri: 'https://itemrestservice.azurewebsites.net/api/items',
            name: '',
            quality: '',
            quantity: 0
        }

        this.PostItem = this.PostItem.bind(this);
    }

    render() {
        return (
            <div className="text-center">
                <h3>Post new item</h3>
                <div className="input-group mb3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="PostItemInputName">Name</label>
                    </div>
                    <input type="text" id="PostItemInputName" className="form-control" placeholder="Name" onInput={(event) => this.setState({ name: event.currentTarget.value })} value={this.state.name} />
                </div>
                <div className="input-group mb3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="PostItemInputQuality">Quality</label>
                    </div>
                    <input type="text" id="PostItemInputQuality" className="form-control" placeholder="Quality" onInput={(event) => this.setState({ quality: event.currentTarget.value })} value={this.state.quality} />
                </div>
                <div className="input-group mb3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="PostItemInputQuantity">Quantity</label>
                    </div>
                    <input type="number" id="PostItemInputQuantity" className="form-control" placeholder="Quantity" onInput={(event) => this.setState({ quantity: Number(event.currentTarget.value) })} value={this.state.quantity} />
                </div>
                <button onClick={this.PostItem} className="btn btn-primary">Post new item</button>
                <div dangerouslySetInnerHTML={{ __html: this.state.div }} className="d-flex justify-content-center"></div>
            </div >
        )
    }

    async PostItem() {
        const ItemListCount = await getItems(this.state.uri);
        const item: item = {
            Id: ItemListCount.data.length + 1,
            Name: this.state.name,
            Quality: this.state.quality,
            Quantity: this.state.quantity
        };
        console.log(item)
        const response = await postItem(this.state.uri, item).catch((error: AxiosError) => {
            this.setState({
                div: `<div class="card text-center text-white bg-dark border-danger" style="width: 18rem;"><div class="card-header">Error</div><div class="card-body"><h5 class="card-title">${error.name}</h5><p class="card-text">${error.message}</p></div></div>`
            })
        });
        console.log(response)
        this.setState({ div: `<div class="card text-center text-white bg-dark border-success" style="width: 18rem;"><div class="card-header">Success</div><div class="card-body"><p class="card-text">ID: ${item.Id}</p><p class="card-text">Name: ${item.Name}</p><p class="card-text">Quality: ${item.Quality}</p><p class="card-text">Quantity: ${item.Quantity}</p></div></div>` })
    }
}
