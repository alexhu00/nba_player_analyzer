import React from "react";

class GroupEmptyState extends React.Component {
    constructor() {
        super();
        this.state = {
            message: 'empty state component here'
        }
    }

    changeMessage() {
        this.setState({
            message: 'table created!'
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}>implement change</button>
            </div>

        )

    }

}

export default GroupEmptyState;