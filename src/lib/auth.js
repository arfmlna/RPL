'use server'
import { cookies } from "next/headers";
import { sb } from "./supabase";

const cookieStore = cookies()

export async function Auth(email, password, name){
  const { error } = await sb.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: name,
        }
    },
    })
    return error
}

export async function SetSession(){
  const { data, error } = await sb.auth.getSession()
  if (error) throw error
  cookies().set({
    name: 'data',
    value: data,
    httpOnly: true,
    path: '/',
  })
}