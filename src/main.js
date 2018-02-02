import React from 'react';
import {render} from 'react-dom';

import './3rdp/dataTables/css/jquery.dataTables.min.css';
import './css/ac.css';
import './css/style.css';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import './3rdp/dataTables/js/jquery.dataTables.min.js';

import * as CommonFuctions from './js/CommonFunctions.js';

import * as ModalDialogComponents from './js/ModalDialogComponents.js';

import HeaderNavbar from './js/HeaderNavbar.js';
import LeftNavComponent from './js/LeftNavComponent.js';
import RightContentComponent from './js/RightContentComponent.js';

//CommonComponents.js
import './js/CommonComponents.js';

import AwesomeComponent from './js/AwesomeComponent.js';
import InputComponent from './js/InputComponent.js';

//temp data for testing
const temdata = [{
    "id": 20,
    "testid": "180117_082840_PKIG",
    "status": "error",
    "username": "admin666",
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"3\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"true\"}",
    "api_vuser_count": 1,
    "api_loop_count": 3,
    "api_target_host": "",
    "time_stamp": "2018-01-17 08:28:40 UTC",
    "meet_slo": "no",
    "deleted": 0,
    "deleted_by": null,
    "deleted_at": null,
    "project": "Default",
    "test_tag": null
}, {
    "id": 19,
    "testid": "180115_074936_XAKN",
    "status": "error",
    "username": "admin666",
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}",
    "api_vuser_count": 1,
    "api_loop_count": 10,
    "api_target_host": "",
    "time_stamp": "2018-01-15 07:49:36 UTC",
    "meet_slo": "no",
    "deleted": 0,
    "deleted_by": null,
    "deleted_at": null,
    "project": "Default",
    "test_tag": null
}, {
    "id": 18,
    "testid": "180115_023502_HPNU",
    "status": "error",
    "username": "admin666",
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}",
    "api_vuser_count": 1,
    "api_loop_count": 10,
    "api_target_host": "",
    "time_stamp": "2018-01-15 02:35:02 UTC",
    "meet_slo": "no",
    "deleted": 0,
    "deleted_by": null,
    "deleted_at": null,
    "project": "yyyy",
    "test_tag": null
}, {
    "id": 17,
    "testid": "180111_020250_RBWI",
    "status": "success",
    "username": "admin666",
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}",
    "api_vuser_count": 1,
    "api_loop_count": 10,
    "api_target_host": "",
    "time_stamp": "2018-01-11 02:02:50 UTC",
    "meet_slo": "yes",
    "deleted": 0,
    "deleted_by": null,
    "deleted_at": null,
    "project": "Default",
    "test_tag": null
}, {
    "id": 16,
    "testid": "180111020202_DKDW",
    "status": "success",
    "username": "admin666",
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}",
    "api_vuser_count": 1,
    "api_loop_count": 10,
    "api_target_host": "",
    "time_stamp": "2018-01-11 02:02:02 UTC",
    "meet_slo": "yes",
    "deleted": 0,
    "deleted_by": null,
    "deleted_at": null,
    "project": "Default",
    "test_tag": null
}, {
    "id": 15,
    "testid": "180111020119_QG_NU",
    "status": "success",
    "username": "admin666",
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}",
    "api_vuser_count": 1,
    "api_loop_count": 10,
    "api_target_host": "",
    "time_stamp": "2018-01-11 02:01:19 UTC",
    "meet_slo": "yes",
    "deleted": 0,
    "deleted_by": null,
    "deleted_at": null,
    "project": "Default",
    "test_tag": null
}, {
    "id": 14,
    "testid": "1801110156_HF_JG",
    "status": "success",
    "username": "admin666",
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}",
    "api_vuser_count": 1,
    "api_loop_count": 10,
    "api_target_host": "",
    "time_stamp": "2018-01-11 01:56:52 UTC",
    "meet_slo": "yes",
    "deleted": 0,
    "deleted_by": null,
    "deleted_at": null,
    "project": "Default",
    "test_tag": null
}, {
    "id": 13,
    "testid": "1801110133_LO_IM",
    "status": "success",
    "username": "admin666",
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}",
    "api_vuser_count": 1,
    "api_loop_count": 10,
    "api_target_host": "",
    "time_stamp": "2018-01-11 01:33:33 UTC",
    "meet_slo": "yes",
    "deleted": 0,
    "deleted_by": null,
    "deleted_at": null,
    "project": "Default",
    "test_tag": null
}, {
    "id": 12,
    "testid": "1801110133_WA_EE",
    "status": "success",
    "username": "admin666",
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}",
    "api_vuser_count": 1,
    "api_loop_count": 10,
    "api_target_host": "",
    "time_stamp": "2018-01-11 01:33:27 UTC",
    "meet_slo": "yes",
    "deleted": 0,
    "deleted_by": null,
    "deleted_at": null,
    "project": "Default",
    "test_tag": null
}, {
    "id": 11,
    "testid": "1801110133_HB_RW",
    "status": "success",
    "username": "admin666",
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}",
    "api_vuser_count": 1,
    "api_loop_count": 10,
    "api_target_host": "",
    "time_stamp": "2018-01-11 01:33:19 UTC",
    "meet_slo": "yes",
    "deleted": 0,
    "deleted_by": null,
    "deleted_at": null,
    "project": "Default",
    "test_tag": null
}];
const tempprjs = ["prja", "prjb", "prjc"];
const temprpts=[];
//end of temp data for testing

// App component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentPage:'tests',
            loginUser:'testuser'
        };
        this.handleNavBtnClick=this.handleNavBtnClick.bind(this);
        this.handleProjectSelectChange=this.handleProjectSelectChange.bind(this);
        this.handleNewTestManuallyClick=this.handleNewTestManuallyClick.bind(this);
    }
    handleNavBtnClick(e){
        this.setState({
            currentPage:e.target.getAttribute("data-nav_type")
        });
    }
    handleLeftNavLiClick(e){
        console.log(e.target);
    }
    handleProjectSelectChange(e){

    }

    handleNewTestManuallyClick(){
        this.setState({
            currentPage:"editTest"
        });
    }

    //componentWillUpdate(nextProps, nextState) {
    //    $('#tests_table').DataTable().clear().draw();
    //}
    //componentDidMount(){
    //    $('#tests_table').DataTable().columns.adjust().draw();
    //}
    componentDidUpdate(){
        $('#tests_table').DataTable();
    }
    render() {
        return (
            <div>
                <ModalDialogComponents.newTestDialog newTestManuallyClick={this.handleNewTestManuallyClick}/>
                <HeaderNavbar navBtnClickHandler={this.handleNavBtnClick} loginUser={this.state.loginUser}/>
                <div className="container-fluid">
                    <div className="spMain">
                        <br />
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <LeftNavComponent page={this.state.currentPage} leftNavLiClickHandler={this.handleLeftNavLiClick}/>
                            </div>
                            <div className="col-lg-10 col-md-10">
                                <RightContentComponent page={this.state.currentPage}
                                                       breadcrumbText={this.state.currentPage}
                                                       projectSelectOnChange={this.handleProjectSelectChange}
                                                       dataOfProjects={tempprjs}
                                                       dataOfTests={temdata}
                                                       dataOfReports={temprpts}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
$(document).ready(function()
    {
        $('#tests_table').DataTable();
    }
);