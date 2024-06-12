"use server";
import fs from "node:fs/promises";
import { v4 } from "uuid";
import { sb } from "./supabase";
import { redirect } from "next/navigation";
import { fail, succes } from "@/components/alert/succes";

export async function uploadFile(formData) {
  const username = formData.get('username')
  const title = formData.get('title')
  const desc = formData.get('desc')
  const genre = formData.getAll('genre')
  const jenis = formData.get('jenis')
  const file = formData.get("file");

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  if (!title && !desc && !genre && !jenis && !file) {
    alert('data tidak lengkap')
  } else {
    const { error } = await sb.from('contents').insert({ id: v4(), author: username, desc: desc, genre: genre, title: title, file: `uploads/pdf/${file.name}`, jenis: jenis })
    if (error) {
      fail('Upload File', 'gagal upload file', 'error', 'coba lagi')
    }
    await fs.writeFile(`./public/uploads/pdf/${file.name}`, buffer);
    succes(`Upload File`, `Berhasil upload file ${file.name}`, 'success', 'ok')
    redirect('/post')
  }
}