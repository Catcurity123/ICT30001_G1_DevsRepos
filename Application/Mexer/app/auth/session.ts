'server-only';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export async function createSession(session: string) {
    cookies().set('session', session, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    });

    return 201;
}

export async function deleteSession() {
    cookies().delete('session');
}

