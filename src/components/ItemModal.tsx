import React, { Component } from 'react'
import './css/ItemModal.scss'

interface IProps {
}

interface IState {
    showModal: boolean
}

export default class ItemModal extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    render() {
        return (
            <div id="container" >
                <div id="background" className="text-center">
                    <div id="modal-container">
                        <div>
                            <div id="modalBodyData"></div>
                            <div>
                                <h3>Delete item</h3>
                                <button type="button" className="btn btn-primary" id="ModalDeleteItemButton">Delete</button>
                                <h3>Update item</h3>
                                <div className="input-group mb3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="UpdateItemInputName">Name</label>
                                    </div>
                                    <input type="text" id="UpdateItemInputName" className="form-control" placeholder="Name"
                                    />
                                </div>
                                <div className="input-group mb3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="UpdateItemInputQuality">Quality</label>
                                    </div>
                                    <input type="text" id="UpdateItemInputQuality" className="form-control" placeholder="Quality" />
                                </div>
                                <div className="input-group mb3">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="UpdateItemInputQuantity">Quantity</label>
                                    </div>
                                    <input type="number" id="UpdateItemInputQuantity" className="form-control" placeholder="Quantity"
                                    />
                                </div>
                                <button type="button" className="btn btn-primary" id="ModalUpdateItemButton">Update</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="close btn">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
