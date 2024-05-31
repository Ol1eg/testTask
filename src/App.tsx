import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import { Post, fetchPosts } from './utils/posts';


const App: React.FC = () => {
  const [posts, SetPosts] = useState<Post[]>([]);

 useEffect(() => {
  const fetchData = async () => {
    const data = await fetchPosts();
    SetPosts(data)
  };
  fetchData();
 }, [])

  const handleSearch = (input: string) => {
    alert(`${input}`);
  };

  return (
    <div className=' flex flex-col justify-center items-center'>
      <SearchBar onSearch={handleSearch} posts={posts}/>
      <PostList posts={posts}/>
    </div>
  );
};

export default App;

