"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import instance from '../../../lib/axios';
import { useRouter } from 'next/navigation';
const AddNewBook = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState('');
    const [description, setDescription] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('categories', categories);
        formData.append('description', description);
        instance.post('/api/books', formData).then((res) => {
            router.push('/books');
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div>
            <div className='bg-gray-700'>
                <div className='flex justify-between px-2 py-4 container mx-auto'>
                    <h1 className='text-3xl font-semibold text-blue-800'>Add Your New Book</h1>
                    <Link href={"/books"} className='bg-blue-500 text-white px-4 py-2 rounded-md'>All Book</Link>
                </div>
            </div>
            <div className='bg-gray-400 py-8'>
                <main className='container mx-auto'>
                    <form encType='multipart/form-data' onSubmit={submitForm}>
                        <div className="relative z-0 w-full mb-6 group">
                            <label for="floating_email" className="">Book Name</label>
                            <input onChange={e => setTitle(e.target.value)} type="text" name="title" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Type The Book Name" required />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label for="floating_email" className="">Category Name</label>
                            <input onChange={e => setCategories(e.target.value)} type="text" name="categories" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Type The Book Name" />
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea onChange={e => setDescription(e.target.value)} className="p-4" name='description' cols="80" rows="10" placeholder='Write Somthing About Your Book'></textarea>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </main>
            </div>

        </div>
    )
}

export default AddNewBook