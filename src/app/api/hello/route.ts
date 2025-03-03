/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  return NextResponse.json({ hello: 'world' })
}