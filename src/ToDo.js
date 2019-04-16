import React from 'react'
import { connect } from 'react-redux'
import {addActionCreator} from './state/toDo'


class ToDo extends React.Component {
    state = {
        newTaskText: ''
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.newTaskText}
                    onChange={event => this.setState({
                        newTaskText: event.target.value,
                    })}
                />
                <button
                    onClick={() => this.props.addTask(this.state.newTaskText)}
                >
                    DODAJ
                </button>
                <ul>
                    {
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _newTaskText: state.toDo.newTaskText
})

const mapDispatchToProps = dispatch => ({
    _addTask: (newTaskText) => dispatch(addActionCreator(newTaskText))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ToDo)
