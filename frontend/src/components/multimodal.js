
import React from "react";
import Modal from "react-modal";
import "../css/createExistingGroupsModal.css"
import "../css/createGroupbutton.css"
import "../css/createGroupModal.css"
import "../css/modalstyles.css"
import GroupModal from "./createGroupModal";
import GroupHeader from "./GroupHeader";
import AddToExistingModal from "./createExistingGroupsModal";
import { addToGroup, createGroup, getGroupDataNames } from "./groupingFunctions";


class MultiModal extends React.Component {
    constructor(props) {
        const token = props.token;
        console.log("token", token);
        super(props);
        this.state = {
            showModal: false,
            activeModal: "",
            token: token,
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

    handleNewGroupButton() {
        let inputValue = document.getElementById('groupNameInput').value;
        console.log("this token", this.state.token);
        createGroup(inputValue, this.state.token);
        this.handleCloseModal();
    }

    handleExistingGroupButton() {
        addToGroup();
        this.handleCloseModal();
    }

    createGroupHeaders() {
        let listOfNames = getGroupDataNames();
        //populate list of group Headers
        let groupHeaders = [];

        for (let i = 0; i < listOfNames.length; i++) {
            groupHeaders.push(<label class="container">
                <input type="checkbox"></input>
                <span className="checkmark"></span>
                {listOfNames[i]}<input type="checkbox"></input>
            </label>);
        }
        return groupHeaders;
    }

    render() {
        return (
            <>
                <div className="icon">
                    <div className="modal-container"
                        className="modal-button-newGroup"
                        onClick={() => this.handleOpenModal("newGroup")}
                    >
                        Create new group
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
                                <input type="text" placeholder="Type in group name here" id="groupNameInput" />
                            </div>
                            <div className="modal-footer">
                                <button className="exitcreategroup-button" onClick={() => this.handleNewGroupButton()}>Create Group</button>
                            </div>
                        </div>

                    </Modal>
                </div>

                {/* add to existing group modal */}
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
                                {this.createGroupHeaders()}
                            </div>
                            <div className="modal-footer-existing-modal">
                                {/* need to change when adding object to existing groups */}
                                <button className="exitcreategroup-button" onClick={() => this.handleExistingGroupButton()}>Add</button>
                            </div>
                        </div>

                    </Modal>
                </div>

            </>
        )

    }
}
export default MultiModal;