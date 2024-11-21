import React, { useEffect, useState } from 'react';
import { blogsAll } from '../../../components/service/blogs';
import BlogCard from '../../../components/blogcard';

function Blogs() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await blogsAll();
        setPost(data.posts);  
      } catch (error) {
        console.log("error", error);  
      }
    })();
  }, []);  

  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />  
      ))}
    </div>
  );
}

export default Blogs;
