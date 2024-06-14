'use server'
import { revalidatePath } from "next/cache";
import { sb } from "./supabase";
import fs from 'fs/promises'
import { redirect } from "next/navigation";

export async function Update(formData){
    const id = formData.get('id')
    const title = formData.get('title')
    const desc = formData.get('desc')
    const jenis = formData.get('jenis')
    const genre = formData.getAll('genre')
    const file = formData.get('file')
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const { data } = await sb.from('contents').select().eq('id', id)
    const oldFile = data.map((data) => data.file)
    const { error } = await sb.from('contents').upsert({
        id: id,
        title: title, 
        desc: desc, 
        genre: genre, 
        file: `uploads/pdf/${file.name}`,
        jenis: jenis }
        ).select()
    if (error) {
        console.log(error)
    }
    await fs.writeFile(`./public/uploads/pdf/${file.name}`, buffer);
    await fs.unlink(`./public/${oldFile}`)
    revalidatePath("/");
    redirect('/post')
}