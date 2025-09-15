"use server"
import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

export async function GET() {
  const users = await prisma.stack.findMany()
  return users;
}
