// 这是 关于 这个todolist form的表单的
import React from "react";
// 引入shortid 和uuid类似的插件
import shortid from "shortid";
// 引入 interface
import { TodoInterface, TodoFormInterface } from "../interfaces/todoListTypes";

const TodoForm: React.FC<TodoFormInterface> = (props) => {
    // 创建form的input的ref
    const inputRef = React.useRef<HTMLInputElement>(null);
    // 创建form的state 即是 text
    const [formState, setFormState] = React.useState('')
    // 用于todo 输入的变化
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(event.target.value)
    }
    // 用于敲enter键的时候
    const handleInputEnter = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            const newTodo: TodoInterface = {
                id: shortid.generate(),
                text: formState,
                isCompleted: false

            };
            // 创建新的待办事项
            props.handleToDoCreate(newTodo);

            // Reset the input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        };

    }

    return (
        <div className="todo-form">
            <input type="text" ref={inputRef} placeholder="请输入新的待办" onChange={event => handleInputChange(event)} onKeyDown={event => handleInputEnter(event)} />
        </div>
    )
}
export default TodoForm;
