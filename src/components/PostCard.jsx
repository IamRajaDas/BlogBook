import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title || 'Post Image'}
                className='rounded-xl object-cover w-full h-48' />

            </div>
            <div className='flex flex-col items-center justify-center'>
              <h2
              className='text-xl font-bold text-gray-900 dark:text-gray-100'
              >{title}</h2>
              <button className='bg-blue-500 text-white p-2 mt-2 rounded-xl hover:bg-blue-600 transition-colors duration-300'>Read Me</button>
            </div>
        </div>
    </Link>
  )
}


export default PostCard