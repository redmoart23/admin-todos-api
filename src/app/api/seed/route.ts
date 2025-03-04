/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const todo = await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        completed: false,
      },
      {
        description: "Piedra del poder",
        completed: true,
      },
      {
        description: "Piedra del tiempo",
        completed: false,
      },
      {
        description: "Piedra del espacio",
        completed: false,
      },
      {
        description: "Piedra del realidad",
        completed: true,
      },
    ],
  });

  return NextResponse.json({ message: "Seed Executed" });
}
