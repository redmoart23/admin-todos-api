import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

interface Segments {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const { id } = params;

  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(todo);
}

const putSchema = yup.object().shape({
  description: yup.string().required(),
  completed: yup.boolean().optional().default(false),
});

export async function PUT(request: Request, { params }: Segments) {
  const { id } = params;

  const todo = await prisma.todo.findUnique({
    where: {
      id,
    },
  });

  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { completed, description, ...rest } = await putSchema.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        completed,
        description,
      },
    });

    if (!updatedTodo) {
      return NextResponse.json(
        { message: "Todo not updated" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
