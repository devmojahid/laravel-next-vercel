"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import Bookscom from '../../components/Bookscom'
import { useRouter } from 'next/navigation';

const Books = () => {

    return (
        <div>
            <div className='bg-gray-500 mb-4'>
                <div className='flex justify-between px-2 py-4 container mx-auto'>
                    <h1 className='text-3xl font-semibold text-blue-800'>All Books List</h1>
                    <Link href={"/books/add-new"} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Add Book</Link>
                </div>
            </div>

            <main className='container mx-auto'>
                <Bookscom />
            </main>

        </div>
    )
}

export default Books
