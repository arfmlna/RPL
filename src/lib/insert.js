import { sb } from "./supabase";
import { v4 } from 'uuid';

export async function Insert(author, title, desc, genre) {
    const { error } = await sb.from('contents').insert({ id: v4(), author: author, title: title, desc: desc, genre: genre })
    if (error) {
        console.log(error)
    }
}