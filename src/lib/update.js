import { sb } from "./supabase";

export async function Update(file){
    const { error } = await sb.from('contents').update({ file: file }).eq('id', 'be020506-d057-4316-9d62-3a613f071eed')
    if (error) {
        console.log(error)
    }
}