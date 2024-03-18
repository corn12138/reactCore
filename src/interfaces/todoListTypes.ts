// 待办事项的interface
export interface TodoInterface {
    id: string;
    text: string;
    isCompleted: boolean;
}

// 待办列表的form的interface
export interface TodoFormInterface {
    todos: TodoInterface[];
    handleToDoCreate: (todo: TodoInterface) => void;
}
// 待办列表的interface
export interface TodoListInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todos: TodoInterface[]
}
// 待办事项的item 的interface
export interface TodoItemInterface {
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todo: TodoInterface;
}