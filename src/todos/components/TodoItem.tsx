"use client";
import { Todo } from "@prisma/client";
//import { useOptimistic } from "react";

import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {

  //const [optimisticTodo, addOptimisticTodo] = useOptimistic<Todo>(todo, {});


  return (
    <div className={todo.completed ? "todoDone" : "todoPending"}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => toggleTodo(todo.id, !todo.completed)}
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-50 ${
            todo.completed ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {todo.completed ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>

        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
};
