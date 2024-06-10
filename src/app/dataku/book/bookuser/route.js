import { sb } from "@/lib/supabase"

export async function GET(req){    
    const { data, error } = await sb.from('contents').select().eq('author', req.username)
    if (error) throw error
    return Response.json(data)
}