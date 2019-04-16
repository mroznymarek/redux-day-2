import React from 'react'
import { connect } from 'react-redux'
import { addActionCreator, deleteActionCreator } from './state/toDo'


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
                    onClick={() => this.props._addTask(this.state.newTaskText)}
                >
                    DODAJ
                </button>
                <ul>
                    {
                        this.props._tasks.map(
                            (task, i) => (
                                <li 
                                    key={task.key}
                                    onClick={() => this.props._deleteTask(task.key)}
                                >
                                    {task.text}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _tasks: state.toDo.tasks
})

const mapDispatchToProps = dispatch => ({
    _addTask: (newTaskText) => dispatch(addActionCreator(newTaskText)),
    _deleteTask: (taskKey) => dispatch(deleteActionCreator(taskKey)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ToDo)
