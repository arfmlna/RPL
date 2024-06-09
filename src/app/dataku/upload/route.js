'use server'
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import { sb } from "@/lib/supabase";
import { v4 } from "uuid";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const username = formData.get('username')
    const title = formData.get('title')
    const desc = formData.get('desc')
    const genre = formData.getAll('genre')
    const jenis = formData.get('jenis')
    const file = formData.get("file");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await fs.writeFile(`./public/uploads/pdf/${file.name}`, buffer);
    revalidatePath("/");
    const { error } = await sb.from('contents').insert({ id: v4(), author: username, title: title, desc: desc, genre: genre, jenis: jenis, file: file.name })
    if (error) {
      return NextResponse.json({ status: "fail", error });
    }
    return NextResponse.json({ status: 'success' });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", e });
  }
}