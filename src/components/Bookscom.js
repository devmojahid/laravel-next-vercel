"use client"
import React, { useEffect, useState } from 'react'
import instance from '../lib/axios';
import Image from 'next/image';
import Link from 'next/link';

const Bookscom = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchBooks();
    }, [books])
    const fetchBooks = async () => {
        const books = instance.get('/api/books').then(res => {
            setBooks(res.data);
        });
    }
    const deleteBook = async (id) => {
        await instance.delete(`/api/books/${id}`).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    return (

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            SI.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Book Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Author
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => {
                            return (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {book.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {book.author}
                                    </td>
                                    <td className="px-6 py-4">
                                        {book.categories}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-4 text-sm">
                                            <div onClick={() => deleteBook(book.id)} className="flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-600">
                                                <Image src="/trush.png" width={20} height={20} />
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Bookscom
