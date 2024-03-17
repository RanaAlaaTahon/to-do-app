import React from "react";
import List from "./List";
class Form extends React.Component {
    constructor() {
        super();
        this.state = { addedTask: [] };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            name: e.target[0].value,
            id: Date.now(),
            done: false,
        };
        this.setState((state) => {
            return { addedTask: [...state.addedTask, newTask] };
        });
    };
    handleToggle = (e, index) => {
        const updatedTask = {
            ...this.state.addedTask[index],
            done: e.target.checked,
        };
        const newTasks = [...this.state.addedTask];
        newTasks[index] = updatedTask;
        this.setState((state) => {
            return { addedTask: newTasks };
        });
        console.log(...this.state.addedTask);
    };
    deleteTask = (index) => {
        this.state.addedTask.splice(index, 1);
        this.setState((state) => {
            return { addedTask: this.state.addedTask };
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="type your task"
                    style={{ marginRight: "2px" }}
                ></input>
                <button> add task </button>
                <List onDelete={this.deleteTask}
                    onToggle={this.handleToggle}
                    tasks={this.state.addedTask} />
            </form>
        );
    }
}
export default Form;
