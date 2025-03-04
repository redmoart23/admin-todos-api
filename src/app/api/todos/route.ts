/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from "@/lib/prisma";
import { console } from "inspector";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = +(searchParams.get("take") ?? 10);
  const skip = +(searchParams.get("skip") ?? 0);

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take must be a number" },
      { status: 400 }
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip must be a number" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });

  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { description } = await request.json();

  const todo = await prisma.todo.create({
    data: {
      description,
    },
  });

  return NextResponse.json(todo);
}
