/**
 * Created by liyancode on 1/30/18.
 */
import React from 'react';

const HeaderNavbar=(props)=>{
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button aria-controls="navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#navbar"
                            data-toggle="collapse" type="button">
                        <span className="sr-only">Toggle Navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand sp-nav-navbar-brand" href="/" id="name">StubPerf&gt;&gt;</a>
                    <button className="btn btn-default nav-a-btn" data-nav_type="tests" data-href="/tests/all?project=all&amp;sharedToMe=f" onClick={props.navBtnClickHandler}>
                        <span className="glyphicon glyphicon-list" data-nav_type="tests"></span>
                        All Tests
                    </button>
                    <button className="btn btn-default nav-a-btn" data-nav_type="reports" data-href="/projects/all" onClick={props.navBtnClickHandler}>
                        <span className="glyphicon glyphicon-list-alt" data-nav_type="reports"></span>
                        All Reports
                    </button>
                    <button className="btn btn-primary" data-target="#newProjectModal" data-toggle="modal" 
                            type="button">
                        <span className="glyphicon glyphicon-plus"></span>
                        New Project
                    </button>
                    <button className="btn btn-success" data-target="#select_test_type" data-toggle="modal" 
                            type="button">
                        <span className="glyphicon glyphicon-plus"></span>
                        New Test
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="sp-nav-navbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a alter="Support" aria-expanded="false" aria-haspopup="true" className="dropdown-toggle"
                               data-toggle="dropdown" role="button">
                                <span aria-hidden="true" className="glyphicon glyphicon-briefcase"></span>
                                Support
                                <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="https://wiki.vip.corp.ebay.com/pages/viewpage.action?pageId=401983387"
                                       target="_blank">How to Use(wiki)</a>
                                </li>
                                <li className="divider" role="separator"></li>
                                <li>
                                    <a href="http://jmeter.apache.org/" target="_blank">What is JMeter</a>
                                </li>
                                <li className="divider" role="separator"></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle" data-toggle="dropdown"
                               role="button">
                                {props.loginUser}
                                <span aria-hidden="true" className="glyphicon glyphicon-user"></span>
                                <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="/logout">
                                        <span className="glyphicon glyphicon-log-out"></span>
                                        Log Out
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderNavbar;