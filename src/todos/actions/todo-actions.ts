"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw new Error(`Todo con id ${id} no existe`);
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed },
  });

  revalidatePath("/dashboard/server-todos");

  return updatedTodo;
};

export const addTodo = async (description: string) => {
  try {
    const todo = await prisma.todo.create({
      data: {
        description,
      },
    });

    revalidatePath("/dashboard/server-todos");

    return todo;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async () => {
  try {
    await prisma.todo.deleteMany({
      where: {
        completed: true,
      },
    });

    revalidatePath("/dashboard/server-todos");
  } catch (error) {
    console.log(error);
  }
};
