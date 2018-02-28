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
    "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"Post\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[[\"Accept\",\"application/json\"],[\"Authorization\",\"Bearer JYf0azPrf1RAvhUhpGZudVU9bBEa\"],[\"Accept-Language\",\"en-us\"]],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"3\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"true\"}",
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
            loginUser:'testuser',
            editTest:{
                valid:{
                    vu:true,
                    loop:true,
                    url:false
                },
                load:{
                    vu:1,
                    loop:1,
                    isFunctionTest:false
                },
                apiInfo:{
                    method:'get',
                    httpOrHttps:'http',
                    url:'',
                    headers:[{hid:'0',k:'k1',v:'v1'},{hid:'1',k:'k2',v:'v2'}],
                    body:''
                }
            }
            //{k:'k1',v:'v1'},{k:'k2',v:'v2'},{k:'k3',v:'v3'}
        };
        this.handleNavBtnClick=this.handleNavBtnClick.bind(this);
        this.handleProjectSelectChange=this.handleProjectSelectChange.bind(this);
        this.handleNewTestManuallyClick=this.handleNewTestManuallyClick.bind(this);
        this.handleEditTestInputOnMouseLeave=this.handleEditTestInputOnMouseLeave.bind(this);
        this.handleEditTestIsFuncTestCheckBoxOnChange=this.handleEditTestIsFuncTestCheckBoxOnChange.bind(this);
        this.handleEditTestSubmitBtnClick=this.handleEditTestSubmitBtnClick.bind(this);
        this.handleEditTestSelectMethodOnChange=this.handleEditTestSelectMethodOnChange.bind(this);
        this.handleEditTestHeaderInputOnChange=this.handleEditTestHeaderInputOnChange.bind(this);
        this.handleEditTestHeaderInputClearOrDeleteOnClick=this.handleEditTestHeaderInputClearOrDeleteOnClick.bind(this);
        this.handleEditTestBodyTextareaOnChange=this.handleEditTestBodyTextareaOnChange.bind(this);
        this.handleTestEditClick=this.handleTestEditClick.bind(this);
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

    handleTestEditClick(e){
        const test=JSON.parse(e.target.getAttribute('data-test'));
        // {
        //     "id": 11,
        //     "testid": "1801110133_HB_RW",
        //     "status": "success",
        //     "username": "admin666",
        //     "api_content": "{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}",
        //     "api_vuser_count": 1,
        //     "api_loop_count": 10,
        //     "api_target_host": "",
        //     "time_stamp": "2018-01-11 01:33:19 UTC",
        //     "meet_slo": "yes",
        //     "deleted": 0,
        //     "deleted_by": null,
        //     "deleted_at": null,
        //     "project": "Default",
        //     "test_tag": null
        // }
        const apiContent=JSON.parse(test["api_content"]);
        let editTest=Object.assign({},this.state.editTest);

        //load
        editTest.load.vu=test["api_vuser_count"];
        editTest.load.loop=test["api_loop_count"];
        editTest.load.isFunctionTest=(apiContent["FunctionTest"]=='true');

        //api info
        const api=apiContent["API"];
        editTest.apiInfo.method=api["Method"].toLowerCase();
        editTest.apiInfo.url=api["Http_or_Https"].toLowerCase()+'://'+api["ServerName_or_IP"]+api["Path"]+api["Parameters"];
        editTest.apiInfo.httpOrHttps=api["Http_or_Https"].toLowerCase();

        //headers
        const apiHeaders=apiContent["Headers"];
        let tmpHeaders=[];
        for(let i=0;i<apiHeaders.length;i++){
            //{hid:'0',k:'k1',v:'v1'},{hid:'1',k:'k2',v:'v2'}
            tmpHeaders.push({hid:''+i,k:apiHeaders[i][0],v:apiHeaders[i][1]});
        }
        editTest.apiInfo.headers=tmpHeaders;

        //body
        editTest.apiInfo.body=api["BodyData"]

        //valid
        editTest.valid.url=true;

        this.setState({
            currentPage:"editTest",
            editTest:editTest
        });

        console.log(this.state);
    }

    // vu/loop/url input onchange
    handleEditTestInputOnMouseLeave(e){
        const tmpValid=e.target.checkValidity();
        const tmpValue=e.target.value;
        const dataInput=e.target.getAttribute('data-input');
        let editTest=Object.assign({},this.state.editTest);
        let valid=Object.assign({},editTest.valid);

        if(dataInput==='virtual_users'){
            valid.vu=tmpValid;
            editTest.load.vu=parseInt(tmpValue);
        }else if(dataInput==='loop_count'){
            valid.loop=tmpValid;
            editTest.load.loop=parseInt(tmpValue);
        }else if(dataInput==='url'){
            valid.url=tmpValid;
            editTest.apiInfo.url=tmpValue;
            editTest.apiInfo.httpOrHttps=tmpValue.split('://')[0]
        }else{
            //error
        }
        editTest.valid=valid;
        this.setState(
            {
                editTest:editTest
            }
        );
    }
    // is function test checkbox onchange
    handleEditTestIsFuncTestCheckBoxOnChange(e){
        console.log('handleEditTestIsFuncTestCheckBoxOnChange');
        let editTest=Object.assign({},this.state.editTest);
        editTest.load.isFunctionTest=e.target.checked;
        this.setState(
            {
                editTest:editTest
            }
        );
    }

    // http method select onchange
    handleEditTestSelectMethodOnChange(e){
        console.log('handleEditTestSelectMethodOnChange');
        let editTest=Object.assign({},this.state.editTest);
        editTest.apiInfo.method=e.target.value;
        this.setState(
            {
                editTest:editTest
            }
        );
    }

    // api info headers input onchange
    handleEditTestHeaderInputOnChange(e){
        const target=e.target;
        const name=target.name;
        const idx=name.split('_');
        const idxHid=idx[0].split('header')[1];
        const idxKorV=idx[1];
        console.log(idx);
        const value=target.value;

        let editTest=Object.assign({},this.state.editTest);
        let headers=editTest.apiInfo.headers;
        let existed=false;
        for(let i=0;i<headers.length;i++){
            if(headers[i]["hid"]===idxHid){
                headers[i][idxKorV]=value;
                existed=true;
            }
        }
        if(!existed){
            if(idxKorV==='k'){
                headers.push({
                    "hid":idx[0].split('header')[1],
                    "k":value
                })
            }else{
                headers.push({
                    "hid":idx[0].split('header')[1],
                    "v":value
                })
            }

        }
        editTest.apiInfo.headers=headers;
        this.setState(
            {
                editTest:editTest
            }
        );
    }
    handleEditTestHeaderInputClearOrDeleteOnClick(e){
        const target=e.target;
        const hid=target.getAttribute("data-hid");
        const clearOrDelete=target.getAttribute("data-clearordelete");

        let editTest=Object.assign({},this.state.editTest);
        let headers=editTest.apiInfo.headers;
        for(let i=0;i<headers.length;i++){
            if(hid===headers[i]["hid"]){
                if(clearOrDelete==="clear"){
                    headers[i]={"hid":hid,"k":"","v":""}

                }else if(clearOrDelete==="delete"){
                    headers.splice(i,1);
                }
                break;
            }
        }
        editTest.apiInfo.headers=headers;
        this.setState(
            {
                editTest:editTest
            }
        );
    }
    // body text area onchange
    handleEditTestBodyTextareaOnChange(e){
        const target=e.target;
        let editTest=Object.assign({},this.state.editTest);

        editTest.apiInfo.body=target.value;
        this.setState(
            {
                editTest:editTest
            }
        );
    }
    // submit test button click
    handleEditTestSubmitBtnClick(){
        console.log(this.state);
        const valid=this.state.editTest.valid;
        if(valid.loop&&valid.url&&valid.vu){
            alert("good");
        }else{
            alert("false");
        }
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
                                                       testEditClick={this.handleTestEditClick}
                                                       dataOfReports={temprpts}
                                                       editTest={this.state.editTest}
                                                       editTestInputOnMouseLeave={this.handleEditTestInputOnMouseLeave}
                                                       editTestIsFuncTestCheckBoxOnChange={this.handleEditTestIsFuncTestCheckBoxOnChange}
                                                       editTestSubmitBtnClick={this.handleEditTestSubmitBtnClick}
                                                       editTestSelectMethodOnChange={this.handleEditTestSelectMethodOnChange}
                                                       editTestHeaderInputOnChange={this.handleEditTestHeaderInputOnChange}
                                                       editTestHeaderInputClearOrDeleteOnClick={this.handleEditTestHeaderInputClearOrDeleteOnClick}
                                                       editTestHttpMethod={this.state.editTest.apiInfo.method}
                                                       editTestBodyTextareaOnChange={this.handleEditTestBodyTextareaOnChange}
                                                       editTestIsFunctionTest={this.state.editTest.load.isFunctionTest}
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