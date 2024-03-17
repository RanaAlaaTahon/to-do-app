import React from 'react';
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.tasks.map((task, index) => {
                    return (
                        <div key={task.id}>
                            <input
                                type="checkbox"
                                onClick={(e) => this.props.onToggle(e, index)}
                            ></input>
                            <p
                                key={task.id}
                                style={{ display: "inline-block" }}
                                className={task.done ? "done" : ""}
                            >
                                {task.name}
                            </p>
                            <button
                                style={{ color: "red" }}
                                onClick={(e) => {
                                    this.props.onDelete(index);
                                }}
                            >
                                x
                            </button>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default List;
