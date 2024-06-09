import { sb } from './supabase'
export async function upload(name, file){
    const {data, error } = await sb.storage.from('filePdf').upload(`pdf/${name}`, file, {upsert: true, cacheControl: '3600'})
    if (error) throw error
    console.log(data)
}