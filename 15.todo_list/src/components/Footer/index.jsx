import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    handleCheckAll = (event) =>{
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAllDoneJobs = () => {
        this.props.clearAllDonejobs()
    }
    render() {
        const { todos } = this.props;
        //已完成的个数
        //总数
        const jobDone = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)
        // console.log('jobDone:',jobDone)
        const total = todos.length
        return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={this.handleCheckAll} checked={jobDone===total &&total !== 0 ?true:false} />
            </label>
            <span>
                <span>已完成{jobDone}</span> / 全部{total}
            </span>
            <button onClick={this.handleClearAllDoneJobs}className="btn btn-danger">清除已完成任务</button>
        </div>
        )
    }
}
