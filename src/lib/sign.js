import { sb } from "./supabase"
export async function Sign(email, password){
    const { error } = await sb.auth.signInWithPassword({
        email: email,
        password: password,
    })
    return error
}