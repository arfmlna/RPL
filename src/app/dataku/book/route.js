import { sb } from "@/lib/supabase"

export async function GET(){    
    const { data, error } = await sb.from('contents').select()
    if (error) throw error
    return Response.json(data)
}