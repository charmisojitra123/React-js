import React from 'react'
import { blogData } from '../pages/Blog'
import MainBlog from '../helpers/MainBlog'

const BlogHome = () => {
  return (
      <div className='containerSection grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-9'>
        {blogData.map((blog, index) => (index <= 2 ? <MainBlog key={index} image={blog.image} title={blog.title} /> : <></>)
        )}
      </div>
  )
}

export default BlogHome
