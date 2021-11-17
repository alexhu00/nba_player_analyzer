import React from "react";

const AddToExistingModal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="addToExistingModal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title"> Add to existing group </div>
                </div>
                <div className="modal-body">
                    <form>
                        <h1>select group</h1>
                    </form>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="exitcreategroup-button">Add</button>

                </div>
            </div>
        </div >
    )
}
export default AddToExistingModal