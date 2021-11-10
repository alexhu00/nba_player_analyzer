import React from "react";
import './createGroupModal.css';

const Modal = props => {
    return (
        <div className="createGroupModal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title"> Create new Group </h4>
                </div>
                <div className="modal-body">
                    Add fill in button here
                </div>
                <div className="modal-footer">
                    <button className="button">Create Group</button>
                </div>
            </div>
        </div>
    )
}
export default Modal