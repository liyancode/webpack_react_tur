import React from 'react';
import {render} from 'react-dom';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';

//import './js/CommonFunctions.js';

import HeaderNavbar from './js/HeaderNavbar.js';
import LeftNavComponent from './js/LeftNavComponent.js';
import RightContentComponent from './js/RightContentComponent.js';

//CommonComponents.js
import './js/CommonComponents.js';

import AwesomeComponent from './js/AwesomeComponent.js';
import InputComponent from './js/InputComponent.js';

import './css/ac.css'
import './css/style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage:'tests',
            loginUser:'testuser'
        };
        this.handleNavBtnClick=this.handleNavBtnClick.bind(this);
    }
    handleNavBtnClick(e){
        this.setState({
            currentPage:e.target.getAttribute("data-nav_type")
        });
    }
    handleLeftNavLiClick(e){
        console.log(e.target);
    }
    render() {
        return (
            <div>
                <HeaderNavbar navBtnClickHandler={this.handleNavBtnClick} loginUser={this.state.loginUser}/>
                <div className="container-fluid">
                    <div className="spMain">
                        <br />
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <LeftNavComponent page={this.state.currentPage} leftNavLiClickHandler={this.handleLeftNavLiClick}/>
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <RightContentComponent page={this.state.currentPage} loginUser={this.state.loginUser}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));