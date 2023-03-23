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

        // will add newItem to our toDoList by doing setState and appending the list/array
        this.setState((prevList) => ({
            toDoList: prevList.toDoList.concat(task)
        })
        )
    }

    // creating remove/delete task function
    removeItem = (index) => {
        let newList = this.state.toDoList.slice()
        newList.splice(index, 1)
        this.setState({toDoList:newList})
    }

    displayToDoList = () => {
        //map through list to show each item in array
        return this.state.toDoList.map((item, index) => {
            return(
                <div className="todolist" key={index}>
                    <ul className="list-group">
                        <li className="list-group-item">{item}</li>
                        <button onClick={()=>this.removeItem(index)}>Remove</button>
                    </ul>
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
                {this.displayToDoList()}
            </div>
        )
    }
}

