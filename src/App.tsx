import React from 'react';
import './App.scss';
import GetAllItems from "./components/GetAllItems";

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <GetAllItems/>
                </div>
                <div className="col">
                    {/*<GetItemById/>*/}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {/*<PostItem/>*/}
                </div>
                <div className="col">
                    {/*<DeleteItem/>*/}
                </div>
            </div>
        </div>
    );
}

export default App;
