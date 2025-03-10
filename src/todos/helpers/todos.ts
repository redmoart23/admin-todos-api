import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  const body = { completed };

  const todo = await fetch(`/api/todos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(body),
  }).then((res) => res.json());

  return todo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description };

  const todo = await fetch(`/api/todos`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  }).then((res) => res.json());

  return todo;
};

export const deleteTodo = async (): Promise<void> => {
  await fetch(`/api/todos`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  }).then((res) => res.json);
};
