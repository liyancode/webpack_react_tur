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
                        <a href="#">
                            <span className="glyphicon glyphicon-edit"></span>
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
                    <ContentTestsTable dataArr={props.testsDataArr}/>
                </div>
            </div>
        </div>
    );
};
const LoadConfig = (props)=> {

    return (

        <div className="col-sm-12">
            <div className="row">
                <div className="col-lg-3">
                    <label>Virtual Users:</label>
                    <input className="form-control" type="number" defaultValue="1" max="25" min="1"
                           data-input="virtual_users" onChange={props.onChange}/>
                </div>
                <div className="col-lg-3">
                    <label>Loop Count:</label>
                    <input className="form-control" type="number" defaultValue="1" min="1" data-input="loop_count"
                           onChange={props.onChange}/>
                </div>
                <div className="col-lg-2 checkbox">
                    <label>
                        <input type="checkbox" onChange={props.onChange}/>
                        function test
                    </label>
                </div>
                <div className="col-lg-4">

                    <button className="btn btn-primary" onClick={props.submitBtnClick}>Submit test</button>

                </div>
            </div>

        </div>
    );
};
const ApiInfo = (props)=> {
    return (
        <div className="col-sm-12">
            <div className="row">
                <div className="col-lg-10">
                    <select className="form-control">
                        <option value="get">GET</option>
                        <option value="post">POST</option>
                        <option value="put">PUT</option>
                        <option value="delete">DELETE</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
// edit test content
const ContentOfEditTest = (props)=> {
    const padding15LR={
        paddingLeft:15,
        paddingRight:15
    }
    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <Breadcrumb text={props.breadcrumbText}/>
                </div>
            </div>
            <div className="col-lg-10 col-lg-offset-1">
                <div className="row highlight" style={padding15LR}>
                    <LoadConfig />
                </div>
                <div className="row highlight" style={padding15LR}>
                    <ApiInfo />
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
                />
        );
    } else if (props.page === 'editTest') {
        return (
            <ContentOfEditTest breadcrumbText={props.breadcrumbText}
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