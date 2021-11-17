
import React from "react";
import Modal from "react-modal";
import "./createExistingGroupsModal.css"
import "./createGroupbutton.css"
import "./createGroupModal.css"
import "./modalstyles.css"
import GroupModal from "./createGroupModal";
import AddToExistingModal from "./createExistingGroupsModal";

class MultiModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            activeModal: "",
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal(val) {
        this.setState({ activeModal: val });
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
        this.setState({ showModal: "" });
    }
    render() {
        return (
            <>
                <div className="icon">
                    <div className="modal-container"
                        className="modal-button-newGroup"
                        onClick={() => this.handleOpenModal("newGroup")}
                    >
                        Create New Group
                    </div>
                    <Modal
                        isOpen={
                            this.state.showModal &&
                            this.state.activeModal === "newGroup"
                        }
                        contentLabel="newGroup Modal"
                    >
                        <div className="content">
                            <button className="close" onClick={this.handleCloseModal}>X</button>
                            <div className="modal-header">
                                <div className="modal-title"> Create new Group </div>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <input type="textarea" value="Type in group name here" id="groupNameinput" />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button className="exitcreategroup-button" onClick={this.handleCloseModal}>Create Group</button>

                            </div>
                        </div>

                    </Modal>
                </div>
                <div className="icon">
                    <div className="modal-container"
                        className="modal-button-existingGroup"
                        onClick={() => this.handleOpenModal("existingGroup")}
                    >
                        Add to group
                    </div>
                    <Modal
                        isOpen={
                            this.state.showModal &&
                            this.state.activeModal === "existingGroup"
                        }
                        contentLabel="existingGroup Modal"
                    >
                        <div className="content">
                            <button className="close" onClick={this.handleCloseModal}>X</button>
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
                                {/* need to change when adding object to existing groups */}
                                <button className="exitcreategroup-button" onClick={this.handleCloseModal}>Add</button>
                            </div>
                        </div>

                    </Modal>
                </div>

            </>
        )

    }
}
export default MultiModal;