import React from 'react'

function BlogCard({id,title, body}) {
  return (
    <div>
        <h2 className='rengliSoz'>{title}</h2>
        <p>{body}</p>
        <hr />
    </div>
  )
}

export default BlogCard