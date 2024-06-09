'use server'
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import { Update } from "@/lib/update";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
    extrnalResolver: true
  }
}

export async function POST(req) {
  
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await fs.writeFile(`./public/uploads/pdf/${file.name}`, buffer);
    revalidatePath("/");
    Update(`uploads/pdf/${file.name}`)
    return NextResponse.json({ status: "success" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", e });
  }
}