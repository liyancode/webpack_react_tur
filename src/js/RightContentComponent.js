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
const StatusIcon=(props)=>{
    const status=props.status;
    if (status == 'success') {
        return (<span className="label label-success">complete</span>);
    } else if (status == 'running') {
        return (<span className="label label-info">running</span>);
    } else if (status == 'fail') {
        return (<span className="label label-danger">failed</span>);
    } else if (status == 'sleep') {
        return (<span className="label label-warning">pending</span>);
    }else if (status == 'error') {
        return (<span className="label label-danger">error</span>);
    }
};

const MeetsloIcon=(props)=>{
    const status=props.status;
    if(status=='yes'){
        return (<span className="label label-success"><span className="glyphicon glyphicon-ok-sign"></span></span>);
    }else if(status=='no'){
        return (<span className="label label-warning"><span className="glyphicon glyphicon-exclamation-sign"></span></span>);
    }else{
        return (<span className="label label-default"><span className="glyphicon glyphicon-adjust"></span></span>);
    }
};

const SelectList=(props)=>{
    const prefix=props.prefix;
    const dataArr=props.dataArr;
    const withAll=props.withAll;

    let options=[];
    if(withAll){
        options.push(<option value="all" key={-1}>{prefix}:ALL</option>);
    }
    if(dataArr&&Array.isArray(dataArr)){
        dataArr.forEach(function(element,i) {
            options.push(<option value={element} key={i}>{prefix}:{element}</option>);
        });
    }
    return (
        <select className="form-control" onChange={props.onChange}>
            {options}
        </select>
    );
};

const ContentTestsTable = (props)=> {
    const dataArr=props.dataArr;
    let tbTrs=[]
    // data should be []
    if(dataArr&&Array.isArray(dataArr)){
        dataArr.forEach(function(element) {
            tbTrs.push(
                <tr key={element["id"]}>
                    <td><input type="checkbox" className="selectTest"/></td>
                    <td>{element["time_stamp"]}</td>
                    <td>{element["time_stamp"]}</td>
                    <td>{element["username"]}</td>
                    <td><StatusIcon status={element["status"]} /></td>
                    <td><MeetsloIcon status={element["meet_slo"]} /></td>
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
}

const temdata=[{"id":20,"testid":"180117_082840_PKIG","status":"error","username":"admin666","api_content":"{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"3\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"true\"}","api_vuser_count":1,"api_loop_count":3,"api_target_host":"","time_stamp":"2018-01-17 08:28:40 UTC","meet_slo":"no","deleted":0,"deleted_by":null,"deleted_at":null,"project":"Default","test_tag":null},{"id":19,"testid":"180115_074936_XAKN","status":"error","username":"admin666","api_content":"{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}","api_vuser_count":1,"api_loop_count":10,"api_target_host":"","time_stamp":"2018-01-15 07:49:36 UTC","meet_slo":"no","deleted":0,"deleted_by":null,"deleted_at":null,"project":"Default","test_tag":null},{"id":18,"testid":"180115_023502_HPNU","status":"error","username":"admin666","api_content":"{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}","api_vuser_count":1,"api_loop_count":10,"api_target_host":"","time_stamp":"2018-01-15 02:35:02 UTC","meet_slo":"no","deleted":0,"deleted_by":null,"deleted_at":null,"project":"yyyy","test_tag":null},{"id":17,"testid":"180111_020250_RBWI","status":"success","username":"admin666","api_content":"{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}","api_vuser_count":1,"api_loop_count":10,"api_target_host":"","time_stamp":"2018-01-11 02:02:50 UTC","meet_slo":"yes","deleted":0,"deleted_by":null,"deleted_at":null,"project":"Default","test_tag":null},{"id":16,"testid":"180111020202_DKDW","status":"success","username":"admin666","api_content":"{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}","api_vuser_count":1,"api_loop_count":10,"api_target_host":"","time_stamp":"2018-01-11 02:02:02 UTC","meet_slo":"yes","deleted":0,"deleted_by":null,"deleted_at":null,"project":"Default","test_tag":null},{"id":15,"testid":"180111020119_QG_NU","status":"success","username":"admin666","api_content":"{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}","api_vuser_count":1,"api_loop_count":10,"api_target_host":"","time_stamp":"2018-01-11 02:01:19 UTC","meet_slo":"yes","deleted":0,"deleted_by":null,"deleted_at":null,"project":"Default","test_tag":null},{"id":14,"testid":"1801110156_HF_JG","status":"success","username":"admin666","api_content":"{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}","api_vuser_count":1,"api_loop_count":10,"api_target_host":"","time_stamp":"2018-01-11 01:56:52 UTC","meet_slo":"yes","deleted":0,"deleted_by":null,"deleted_at":null,"project":"Default","test_tag":null},{"id":13,"testid":"1801110133_LO_IM","status":"success","username":"admin666","api_content":"{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}","api_vuser_count":1,"api_loop_count":10,"api_target_host":"","time_stamp":"2018-01-11 01:33:33 UTC","meet_slo":"yes","deleted":0,"deleted_by":null,"deleted_at":null,"project":"Default","test_tag":null},{"id":12,"testid":"1801110133_WA_EE","status":"success","username":"admin666","api_content":"{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}","api_vuser_count":1,"api_loop_count":10,"api_target_host":"","time_stamp":"2018-01-11 01:33:27 UTC","meet_slo":"yes","deleted":0,"deleted_by":null,"deleted_at":null,"project":"Default","test_tag":null},{"id":11,"testid":"1801110133_HB_RW","status":"success","username":"admin666","api_content":"{\"API\":{\"ServerName_or_IP\":\"www.hellowd.com\",\"Http_or_Https\":\"http\",\"Method\":\"GET\",\"Path\":\"\",\"Parameters\":null,\"BodyValTypes\":\"form-data\",\"BodyData\":\"\"},\"Headers\":[],\"ThreadProperties\":{\"Number_of_Threads\":\"1\",\"LoopCount\":\"10\"},\"SchedulerConfiguration\":{\"DurationSeconds\":\"300\"},\"UserDefinedVariables\":[],\"PerfmonSwitch\":\"false\",\"TargetHost\":\"\",\"FunctionTest\":\"false\"}","api_vuser_count":1,"api_loop_count":10,"api_target_host":"","time_stamp":"2018-01-11 01:33:19 UTC","meet_slo":"yes","deleted":0,"deleted_by":null,"deleted_at":null,"project":"Default","test_tag":null}]
const tempprjs=["prja","prjb","prjc"]
class RightContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginUser:props.loginUser,
            pageToUpdate: props.page,
            breadcrumbText: props.page,
            testsDataArr:[]
        };
        this.handleProjectSelectChange=this.handleProjectSelectChange.bind(this);
    }

    updateBreadcrumb() {

    }

    requestTestsData() {

    }

    handleProjectSelectChange(e){
        console.log(e.target.value);
        this.setState({
            breadcrumbText:"tests > projects > "+e.target.value
        });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <Breadcrumb text={this.state.breadcrumbText}/>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-2">
                        <SelectList withAll={true} prefix="Project" dataArr={tempprjs} onChange={this.handleProjectSelectChange}/>
                        <br />
                    </div>
                    <div className="col-sm-12">
                        <ContentTestsTable dataArr={temdata}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightContentComponent;