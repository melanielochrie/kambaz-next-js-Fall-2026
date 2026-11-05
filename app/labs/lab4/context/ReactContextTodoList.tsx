
"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export function ReactContextTodoList() {
    const { todos, addTodo, updateTodo, deleteTodo } =
        useTodosContext();

    const [title, setTitle] = useState("");

    const handleAdd = () => {
        if (title.trim() === "") return;
        addTodo(title);
        setTitle("");
    };

    return (
        <div id="wd-context-todo-list">
            <h3>React Context Todo List</h3>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New todo"
                className="rounded border p-2"
                id="wd-context-todo-input"
            />

            <button
                type="button"
                onClick={handleAdd}
                id="wd-context-add-todo"
                className="ml-2 rounded bg-green-600 p-2 text-white"
            >
                Add
            </button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="my-2">
                        <input
                            value={todo.title}
                            onChange={(e) =>
                                updateTodo(todo.id, e.target.value)
                            }
                            className="rounded border p-2"
                        />

                        <button
                            type="button"
                            onClick={() => deleteTodo(todo.id)}
                            className="ml-2 rounded bg-red-600 p-2 text-white"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
