'use client'
import PromptCard from '@components/PromptCard';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

const PostList = ({ data }) => {
    // console.log(data);
    return (
      <div className='mt-16 prompt_layout'>
  
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
          />
        ))}
      </div>
    );
};
  
const page = () => {

    const { data: session } = useSession();
    const [post, setPost] = useState([]);

console.log(post);
    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();
    
        setPost(data);
      };
    
      useEffect(() => {
        fetchPosts();
      }, []);

  return (
      <div>
         
 {/* All Prompts */}
   
 <PostList
        data={post}
        />
  
    </div>
  )
}

export default page