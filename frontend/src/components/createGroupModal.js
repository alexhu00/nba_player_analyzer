import React from "react";
import './createGroupModal.css';

// tutorial here: https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a 
const Modal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="createGroupModal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title"> Create new Group </h4>
                </div>
                <div className="modal-body">
                    Add fill in button here
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="createGroup-button">Create Group</button>

                </div>
            </div>
        </div >
    )
}
export default Modal