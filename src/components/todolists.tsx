// 待办列表的
import React from "react";
// 引入待办事项组件
import TodoItem from './todoItem'
// 引入 todolist的interface
import { TodoListInterface } from "../interfaces/todoListTypes";

const TodoList :React.FC<TodoListInterface> = (props)=>{
    return (
        <div className="todo-list">
          <ul>
            {props.todos.map((todo) => (
              <li key={todo.id}>
                <TodoItem
                  todo={todo}
                  handleTodoUpdate={props.handleTodoUpdate}
                  handleTodoRemove={props.handleTodoRemove}
                  handleTodoComplete={props.handleTodoComplete}
                  handleTodoBlur={props.handleTodoBlur}
                />
              </li>
            ))}
          </ul>
        </div>
      )
}
export default TodoList;
