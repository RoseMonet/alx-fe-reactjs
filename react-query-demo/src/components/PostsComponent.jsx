import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsComponent = () => {
    // Use React Query's useQuery to fetch data with advanced options
    const {
      data: posts,
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery('posts', fetchPosts, {
      cacheTime: 1000 * 60 * 5, // Cache the data for 5 minutes
      staleTime: 1000 * 60 * 1, // Data stays fresh for 1 minute before becoming stale
      refetchOnWindowFocus: false, // Prevent refetching when the window is focused
      keepPreviousData: true, // Keep previous data while fetching new data
    });

  // Handle loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Handle error state
  if (isError) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;