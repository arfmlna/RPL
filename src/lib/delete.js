'use server'
import { sb } from "./supabase"
import fs from "fs/promises"

export async function deleteData(id){
    const { data } = await sb.from('contents').select().eq('id', id)
    if (data.length === 0) return { error: 'Data not found' }
    const file = data.map((data) => data.file)
    await fs.unlink(`./public/${file}`)
    const { error } = await sb.from('contents').delete().eq('id', id)
    if (error) throw error
}