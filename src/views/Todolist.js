import React, { Component } from 'react'

export default class Todolist extends Component {
    constructor(){
        super()
        this.state = {
            toDoList: []
        }
    }

    // creating add item function
    addItem = (event) => {
        event.preventDefault()
        const task = event.target.todo.value
        // will make each task item a dictionary/object to hold many key-value pairs
        const newItem = {id: Date.now(), task: task, completed: false}

        // will add newItem to our toDoList by doing setState and appending the list/array
        this.setState = this.state.toDoList.append(newItem)
    }

    // creating finsih/delete task function
    finishItem = () => {
        // will need to change completed key in task object to true
    }

    displayToDoList = () => {
        return this.state.toDoList.map((item) => {
            return(
                <div key={this.state.toDoList.id}>
                    <input type="checkbox" checked={this.state.toDoList.completed} onChange={() => finishItem(this.state.toDoList.id)}/>
                    <span>{this.state.toDoList.task}</span>
                </div>
            )
        }
        )
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <form onSubmit={this.addItem}>
                    <input name='todo' placeholder='Task'/>
                    <button>Add to list</button>
                </form>
            </div>
        )
    }
}

