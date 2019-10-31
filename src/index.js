import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wish from "./components/Wish"
import { BrowserRouter, Route, Switch } from "react-router-dom";


class Routes extends React.Component {
    render() {

        return (
            <BrowserRouter>
                <div>
                    <Switch>


                        <Route path="/Wish" render={() => <Wish />}></Route>
                        <Route path="/" render={() => <App />}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(

    <Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
