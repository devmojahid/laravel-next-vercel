"use client"
import Register from '@/components/register'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
export default function Page() {
    const router = useRouter();
    useEffect(() => {
        registerRedirect();
    }, []);
    const registerRedirect = async () => {
        const data = await sessionStorage.getItem('user');
        const user = await JSON.parse(data);
        if (user) {
            await router.push('/books');
        }
    };
    return (
        <>
            <main className='flex items-center justify-center min-h-screen bg-sky-600'>
                <div className='w-[500px] h-[450px] bg-white rounded-sm p-4'>
                    <Register />
                </div>
            </main>
        </>
    )
}
