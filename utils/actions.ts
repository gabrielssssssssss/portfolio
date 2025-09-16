"use server"
import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";

export async function GET() {
  const data = await prisma.stack.findMany()
  return data;
}

export async function GET_MUSIC() {
  const data = await prisma.music.findMany()
  return data;
}