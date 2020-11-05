import React, { Component } from 'react';
import './App.scss';
import GetAllItems from './components/GetAllItems';
import GetItemById from './components/GetItemById'
import PostItem from './components/PostItem'
import DeleteItem from './components/DeleteItem'
import ItemModal from './components/ItemModal'

interface IProps {
}

interface IState {
    showHideModal: boolean;
}

export default class App extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            showHideModal: false
        }
    }

    render() {
        const { showHideModal } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <GetAllItems />
                        </div>
                        <div className="col">
                            <GetItemById />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <PostItem />
                        </div>
                        <div className="col">
                            <DeleteItem />
                        </div>
                    </div>
                </div>
                {showHideModal && <ItemModal />}
            </div>
        );
    }
}

