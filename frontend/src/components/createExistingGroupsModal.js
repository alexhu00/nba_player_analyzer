import React from "react";
import '../css/createExistingGroupsModal.css';

const AddToExistingModal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="addToExistingModal" onClick={props.onClose}>
            <div className="modal-content-existing-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header-existing-modal">
                    <div className="modal-title-existing-modal"> Add to existing group </div>
                </div>
                <div className="modal-body-existing-modal">
                    <label class="container">One
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>

                    <label class="container">Two
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label class="container">fourteen
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label class="container">One
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>

                    <label class="container">Two
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label class="container">fourteen
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>


                </div>
                <div className="modal-footer-existing-modal">
                    <button onClick={props.onClose} className="exitcreategroup-button">Add</button>

                </div>
            </div>
        </div >
    )
}
export default AddToExistingModal