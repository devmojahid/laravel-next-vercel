"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import instance from '../lib/axios';
const Register = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submit = async (e) => {
        e.preventDefault();
        await instance.post('/api/register',
            {
                name: name,
                email: email,
                password: password
            }
        ).then((res) => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
        }).catch((err) => {
            console.log(err);
        });
        await router.push('/books');

    }
    return (
        <div>
            <h1 className='text-center text-2xl text-black-700 font-semibold mb-8'>Register Page</h1>
            <form onSubmit={submit}>
                <div className="col-span-3 sm:col-span-2 mb-5">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Full Name
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full flex-1 border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder="Robart Downey"
                            onChange={e => { setName(e.target.value) }}
                        />
                    </div>
                </div>

                <div className="col-span-3 sm:col-span-2 mb-5">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full flex-1 border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder="example@gmail.com"
                            onChange={e => { setEmail(e.target.value) }}
                        />
                    </div>
                </div>

                <div className="col-span-3 sm:col-span-2 mb-5">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full flex-1 border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder="password"
                            onChange={e => { setPassword(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="bg-gray-50 py-3">
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </form>
            <Link href={"/"} className=' text-indigo-600'>I Have a account</Link>
        </div>
    )
}

export default Register
