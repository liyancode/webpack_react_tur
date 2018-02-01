// Modal Dialog components functions

export function newTestDialog(){
    return (
        <div className="modal fade" id="select_test_type" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <a className="close" data-dismiss="modal" type="button">
                            <i className="glyphicon glyphicon-remove"></i>
                        </a>
                        <h4 className="modal-title">Create a New API Test</h4>
                    </div>
                    <div className="modal-body">
                        <div className="type-container">
                            <div className="option">
                                <button className="btn btn-success btn-lg" data-dismiss="modal" id="api_new_test_btn">
                                    <i className="glyphicon glyphicon-edit"></i>
                                    Edit endpoint&amp;payload manually
                                </button>
                            </div>
                            <div className="option">
                                <button className="btn btn-warning btn-lg" id="import_postman_btn">
                                    <i className="glyphicon glyphicon-folder-open"></i>
                                    Import from Postman file
                                    <img src="/static/resources/image/postmanlogo.png" style="width:22px;" />
                                    </button>
                                </div>
                                <div className="dropzone dz-clickable" id="drop2" style="display:none;"><div className="dz-default dz-message"><span>Drop your postman testing here to upload</span></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};