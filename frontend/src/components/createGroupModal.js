import React from "react";
import '../css/createGroupModal.css';
import '../css/createGroupbutton.css';

// tutorial here: https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a 
const GroupModal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="createGroupModal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title"> Create new group </div>
                </div>
                <div className="modal-body">
                    <form>
                        <input type="textarea" value="Type in group name here" id="groupNameInput" />
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose}>Create Group</button>
                </div>
            </div>
        </div >
    )
}
export default GroupModal