import React from "react";
import './createGroupModal.css';
import './createGroupbutton.css';

// tutorial here: https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a 
const GroupModal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="createGroupModal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title"> Create new Group </div>
                </div>
                <div className="modal-body">
                    <form>
                        <input type="textarea" value="Type in group name here" id="groupNameinput" />
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="exitcreategroup-button">Create Group</button>

                </div>
            </div>
        </div >
    )
}
export default GroupModal