/**
 * Created by yanli6 on 1/30/18.
 */
import React from 'react';

const LeftNavComponent=(props)=>{
    if(props.page==="tests"){
        return (
            <ul className="nav left-nav-ul">
                <li className="active">
                    <a href="#" onClick={props.leftNavLiClickHandler}>My Projects</a>
                </li>
                <li>
                    <a href="#" onClick={props.leftNavLiClickHandler}>Shared to Me</a>
                </li>
            </ul>
        );
    }else if(props.page==="reports"){
        return (
            <ul className="nav left-nav-ul">
                <li className="active" id="left-nav-ul-li-myProjects">
                    <a href="#" onClick={props.leftNavLiClickHandler}>My Reports</a>
                </li>
            </ul>
        );
    }
}

export default LeftNavComponent;