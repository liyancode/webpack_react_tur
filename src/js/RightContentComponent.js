/**
 * Created by liyancode on 1/30/18.
 */
import React from 'react';

// Breadcrumb component
const Breadcrumb = (props)=> {
    return (
        <div className="breadcrumb">
            <li>{props.text}</li>
        </div>
    );
};
// test status icon
const StatusIcon = (props)=> {
    const status = props.status;
    if (status == 'success') {
        return (<span className="label label-success">complete</span>);
    } else if (status == 'running') {
        return (<span className="label label-info">running</span>);
    } else if (status == 'fail') {
        return (<span className="label label-danger">failed</span>);
    } else if (status == 'sleep') {
        return (<span className="label label-warning">pending</span>);
    } else if (status == 'error') {
        return (<span className="label label-danger">error</span>);
    }
};

// test meet slo icon
const MeetsloIcon = (props)=> {
    const status = props.status;
    if (status == 'yes') {
        return (<span className="label label-success"><span className="glyphicon glyphicon-ok-sign"></span></span>);
    } else if (status == 'no') {
        return (<span className="label label-warning"><span
            className="glyphicon glyphicon-exclamation-sign"></span></span>);
    } else {
        return (<span className="label label-default"><span className="glyphicon glyphicon-adjust"></span></span>);
    }
};

// select option component
const SelectList = (props)=> {
    const prefix = props.prefix;
    const dataArr = props.dataArr;
    const withAll = props.withAll;

    let options = [];
    if (withAll) {
        options.push(<option value="all" key={-1}>{prefix}:ALL</option>);
    }
    if (dataArr && Array.isArray(dataArr)) {
        dataArr.forEach(function (element, i) {
            options.push(<option value={element} key={i}>{prefix}:{element}</option>);
        });
    }
    return (
        <select className="form-control" onChange={props.onChange}>
            {options}
        </select>
    );
};

// tests table component
const ContentTestsTable = (props)=> {
    const dataArr = props.dataArr;
    let tbTrs = []
    // data should be []
    if (dataArr && Array.isArray(dataArr)) {
        dataArr.forEach(function (element) {
            tbTrs.push(
                <tr key={element["id"]}>
                    <td><input type="checkbox" className="selectTest"/></td>
                    <td>{element["time_stamp"]}</td>
                    <td>{element["time_stamp"]}</td>
                    <td>{element["username"]}</td>
                    <td><StatusIcon status={element["status"]}/></td>
                    <td><MeetsloIcon status={element["meet_slo"]}/></td>
                    <td>{element["project"]}</td>
                    <td>
                        <a href="#">{element["testid"]}</a>
                    </td>
                    <td>
                        <a data-test={JSON.stringify(element)} href="#" onClick={props.testEditOnClick}>
                            <span className="glyphicon glyphicon-edit" data-test={JSON.stringify(element)}></span>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <span className="glyphicon glyphicon-repeat"></span>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <span className="glyphicon glyphicon-trash"></span>
                        </a>
                    </td>
                </tr>
            )
        });
    }
    return (
        <table className="table table-condensed table-bordered table-hover tablesorter" id="tests_table">
            <thead>
            <tr>
                <th>
                    <span className="glyphicon glyphicon-check"></span>
                </th>
                <th>
                    <span className="glyphicon glyphicon-time"></span>

                </th>
                <th>
                    <span className="glyphicon glyphicon-globe"></span>
                    Endpoint
                </th>
                <th>
                    <span className="glyphicon glyphicon-user"></span>
                </th>
                <th>
                    <span className="glyphicon glyphicon-hourglass"></span>
                    Status
                </th>
                <th>
                    SLO
                </th>
                <th>
                    Project
                </th>
                <th>
                    <span className="glyphicon glyphicon-blackboard"></span>
                    Detail
                </th>
                <th>
                    Edit
                </th>
                <th>
                    Reran
                </th>
                <th>
                    Delete
                </th>
            </tr>
            </thead>
            <tbody>
            {tbTrs}
            </tbody>
        </table>
    );
};

// reports table component
const ContentReportsTable = (props)=> {
    const dataArr = props.dataArr;
    let tbTrs = []
    // data should be []
    return (
        <table className="table table-condensed table-bordered table-hover">
            <thead>
            <tr>
                <th>
                    <span className="glyphicon glyphicon-check"></span>
                </th>
                <th>
                    <span className="glyphicon glyphicon-time"></span>

                </th>
                <th>
                    <span className="glyphicon glyphicon-globe"></span>
                    Endpoint
                </th>
                <th>
                    <span className="glyphicon glyphicon-user"></span>
                </th>
                <th>
                    <span className="glyphicon glyphicon-hourglass"></span>
                    Status
                </th>
                <th>
                    SLO
                </th>
                <th>
                    Project
                </th>
                <th>
                    <span className="glyphicon glyphicon-blackboard"></span>
                    Detail
                </th>
                <th>
                    Delete
                </th>
            </tr>
            </thead>
            <tbody>
            {tbTrs}
            </tbody>
        </table>
    );
};

// tests content
const ContentOfTests = (props)=> {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <Breadcrumb text={props.breadcrumbText}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-2">
                    <SelectList withAll={true} prefix="Project" dataArr={props.projectsDataArr}
                                onChange={props.projectsSelectOnChange}/>
                    <br />
                </div>
                <div className="col-sm-12">
                    <ContentTestsTable dataArr={props.testsDataArr} testEditOnClick={props.testEditClick}/>
                </div>
            </div>
        </div>
    );
};
const LoadConfig = (props)=> {
    let vuInput=<input className="form-control" type="number" value={props.testLoad.vu||'1'} max="15" min="1"
                       data-input="virtual_users" required='true' onChange={props.inputOnMouseLeave}/>;
    let lcInput=<input className="form-control" type="number" value={props.testLoad.loop||'1'} min="1" max="100"
                       data-input="loop_count" required='true' onChange={props.inputOnMouseLeave}/>;
    if(props.isFunctionTest){
        vuInput=<input className="form-control" type="number" disabled value="1" max="15" min="1"
                       data-input="virtual_users" required='true' onChange={props.inputOnMouseLeave}/>;
        lcInput=<input className="form-control" type="number" disabled value="3" min="1" max="100"
                       data-input="loop_count" required='true' onChange={props.inputOnMouseLeave}/>;
    }

    return (

        <div className="col-sm-12">
            <div className="row">
                <div className="col-lg-3">
                    <h4><span className="label label-default">Virtual Users ( Max = 15 )</span></h4>
                    {vuInput}
                </div>
                <div className="col-lg-3">
                    <h4><span className="label label-default">Loop Count ( Max = 100 )</span></h4>
                    {lcInput}
                </div>
                <div className="col-lg-2 checkbox">
                    <label>
                        <h4>
                            <input type="checkbox" data-input="is_func_test_check"
                                   checked={props.testLoad.isFunctionTest} onChange={props.isFuncTestCheckBoxOnChange}/>
                            <span className="label label-info">function test</span>
                        </h4>
                        <span className="label label-default" display="none">1 user loop 3 times</span>
                    </label>
                </div>
                <div className="col-lg-4">
                    <br />
                    <button className="btn btn-danger" onClick={props.submitBtnClick}>Submit test</button>

                </div>
            </div>

        </div>
    );
};
const ApiInfo = (props)=> {
    const styleBorderTop0 = {
        borderTop: 0,
        marginTop: 2
    }
    const headers = props.testApiInfo.headers;
    //more headers
    let moreHeadersHtml = [];
    let idxi=0;
    for (let i = 0; i < headers.length; i++) {
        moreHeadersHtml.push(
            <div className="row" key={"header_"+i}>
                <div className="col-lg-4">
                    <input className="form-control" type="text" value={headers[i].k || ''} name={"header"+headers[i].hid+"_k"} onChange={props.headerInputOnChange} style={styleBorderTop0}/>
                </div>
                <div className="col-lg-6">
                    <input className="form-control" type="text" value={headers[i].v || ''} name={"header"+headers[i].hid+"_v"} onChange={props.headerInputOnChange} style={styleBorderTop0}/>
                </div>
                <div className="col-lg-2">
                    <div className="btn-group btn-group-justified" role="group">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default" data-hid={""+headers[i].hid} data-clearordelete="clear" onClick={props.headerInputClearOrDeleteOnClick}>clear</button>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-default" data-hid={""+headers[i].hid} data-clearordelete="delete" onClick={props.headerInputClearOrDeleteOnClick}>delete</button>
                        </div>
                    </div>
                </div>
            </div>);
        if(parseInt(headers[i].hid)>idxi){
            idxi=parseInt(headers[i].hid);
        }
    }
    idxi++;
    moreHeadersHtml.push(
        <div className="row api_info_header" key={"header_"+idxi}>
            <div className="col-lg-4">
                <input className="form-control" type="text" value='' name={"header"+idxi+"_k"} onChange={props.headerInputOnChange} style={styleBorderTop0}/>
            </div>
            <div className="col-lg-6">
                <input className="form-control" type="text" value='' name={"header"+idxi+"_v"} onChange={props.headerInputOnChange} style={styleBorderTop0}/>
            </div>
            {/*<div className="col-lg-2">*/}
                {/*<div className="btn-group btn-group-justified" role="group">*/}
                    {/*<div className="btn-group" role="group">*/}
                        {/*<button type="button" className="btn btn-default">+</button>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    );
    let bodyTabLi=<li><a data-toggle="tab" href="#api_info_body">Body</a></li>;
    if(props.httpMethod==='get'){
        bodyTabLi=<li className="disabled"><a href="#api_info_body">Body</a></li>;
    }
    return (
        <div className="col-sm-12">
            <div className="row">
                {/*endpoint config*/}
                <div className="col-lg-1 col-md-2 col-sm-12">
                    <select className="form-control" defaultValue={props.testApiInfo.method}
                            onChange={props.selectMethodOnChange}>
                        <option value="get">GET</option>
                        <option value="post">POST</option>
                        <option value="put">PUT</option>
                        <option value="delete">DELETE</option>
                    </select>
                </div>
                <div className="col-lg-11 col-md-10 col-sm-12">
                    <input className="form-control" type="url" data-input="url" required='true'
                           defaultValue={props.testApiInfo.url}
                           placeholder="https://example.com/resources/param=test&v=1"
                           onBlur={props.inputOnMouseLeave}/>
                </div>
            </div>
            <br />

            <div className="row">
                {/*header & body config*/}
                <div className="col-lg-12">
                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#api_info_headers">Headers</a></li>
                        {bodyTabLi}
                    </ul>
                </div>
                <div className="col-lg-12">
                    <div className="tab-content">
                        <div className="tab-pane active" id="api_info_headers">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h5><span className="label label-default">Key</span></h5>
                                </div>
                                <div className="col-lg-6">
                                    <h5><span className="label label-default">Value</span></h5>
                                </div>
                            </div>
                            {moreHeadersHtml}
                        </div>
                        <div className="tab-pane" id="api_info_body">
                            <div className="row">
                                <br/>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Body:</label>
                                        <textarea className="form-control" rows="5" id="comment" onChange={props.bodyTextareaOnChange}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// edit test content
const ContentOfEditTest = (props)=> {
    const padding15LR = {
        paddingLeft: 15,
        paddingRight: 15
    }
    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <Breadcrumb text={props.breadcrumbText}/>
                </div>
            </div>
            <div className="col-sm-12 well">
                <div className="row highlight" style={padding15LR}>
                    <LoadConfig testLoad={props.editTest.load}
                                inputOnMouseLeave={props.editTestInputOnMouseLeave}
                                isFuncTestCheckBoxOnChange={props.editTestIsFuncTestCheckBoxOnChange}
                                submitBtnClick={props.editTestSubmitBtnClick}
                                isFunctionTest={props.editTestIsFunctionTest}
                    />
                </div>
                <div className="row highlight" style={padding15LR}>
                    <ApiInfo testApiInfo={props.editTest.apiInfo}
                             inputOnMouseLeave={props.editTestInputOnMouseLeave}
                             selectMethodOnChange={props.editTestSelectMethodOnChange}
                             headerInputOnChange={props.editTestHeaderInputOnChange}
                             headerInputClearOrDeleteOnClick={props.editTestHeaderInputClearOrDeleteOnClick}
                             httpMethod={props.editTestHttpMethod}
                             bodyTextareaOnChange={props.editTestBodyTextareaOnChange}
                        />
                </div>
            </div>
        </div>
    );
};

// reports content
const ContentOfReports = (props)=> {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <Breadcrumb text={props.breadcrumbText}/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <ContentReportsTable dataArr={props.reportsDataArr}/>
                </div>
            </div>
        </div>
    );
};

const RightContentComponent = (props)=> {
    if (props.page === 'tests') {
        return (
            <ContentOfTests breadcrumbText={props.breadcrumbText}
                            projectsDataArr={props.dataOfProjects}
                            projectsSelectOnChange={props.projectSelectOnChange}
                            testsDataArr={props.dataOfTests}
                            testEditClick={props.testEditClick}
                />
        );
    } else if (props.page === 'editTest') {
        return (
            <ContentOfEditTest breadcrumbText={props.breadcrumbText}
                               editTest={props.editTest}
                               editTestInputOnMouseLeave={props.editTestInputOnMouseLeave}
                               editTestIsFuncTestCheckBoxOnChange={props.editTestIsFuncTestCheckBoxOnChange}
                               editTestSubmitBtnClick={props.editTestSubmitBtnClick}
                               editTestSelectMethodOnChange={props.editTestSelectMethodOnChange}
                               editTestHeaderInputOnChange={props.editTestHeaderInputOnChange}
                               editTestHeaderInputClearOrDeleteOnClick={props.editTestHeaderInputClearOrDeleteOnClick}
                               editTestHttpMethod={props.editTestHttpMethod}
                               editTestBodyTextareaOnChange={props.editTestBodyTextareaOnChange}
                               editTestIsFunctionTest={props.editTestIsFunctionTest}
                />
        );
    } else {
        return (
            <ContentOfReports breadcrumbText={props.breadcrumbText}
                              reportsDataArr={props.dataOfReports}
                />
        );
    }
}

export default RightContentComponent;