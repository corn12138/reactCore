// 待办事项的组件
import React from "react";
// 引入interface
import { TodoItemInterface } from "../interfaces/todoListTypes";

const TodoItem:React.FC<TodoItemInterface>= (props)=>{
    return (
        <div className='todo-item'>
          <div onClick={() => props.handleTodoComplete(props.todo.id)}>
            {props.todo.isCompleted ? (
              <span className="todo-item-checked">✔</span>
            ) : (
              <span className="todo-item-unchecked" />
            )}
          </div>
    
          <div className="todo-item-input-wrapper">
            <input
              value={props.todo.text}
              onBlur={props.handleTodoBlur}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
            />
          </div>
    
          <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
            ⨯
          </div>
        </div>
      )
}
export default TodoItem;   