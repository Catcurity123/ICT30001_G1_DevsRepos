"use server"

import { Constants } from "@/app/_lib/constants"
import { createSession, deleteSession } from "@/app/auth/session";

export async function login(
  user_name: string,
  pass_word: string
) {
  try {
    const username = user_name;
    const password = pass_word;

    //  Send to our api route
    const res = await fetch(Constants.ENDPOINT + '/auth/username', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 'username': username, 'password': password }),
    });

    const data = await res.json()

    if (data.message === "Successful login") {
      const result = createSession(data.access_token)
      return result
    }
    else {
      return data.message // Return error
    }
  }
  catch (error) {
    console.error(error)
  }
}

export async function logout(){
  deleteSession();
}
