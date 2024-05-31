import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import PostCard from '../Cards/PostCard';
import { Post } from '../utils/posts';

interface PostProps{
    posts: Post[];
}

const PostList: React.FC<PostProps>=({  posts }) => {
    const [page, setPage] = useState(0);
    const postPerPage = 10;

    const handleClick = ({ selected }: { selected: number }) => {
        setPage(selected)
    }

    const startIndex = page * postPerPage;
    const currentPosts = posts.slice(startIndex, startIndex + postPerPage);

    return (
        <div className='bg-slate-100 p-[25px]'>
            <p className='flex justify-center'> Posts </p>
            <div className='grid gap-4 grid-cols-2'>
                {
                    currentPosts.map(post => (
                        <PostCard postTitle={post.title} key={post.id} />
                    ))
                }
            </div>
            <div className='flex justify-center my-[20px]'>
                <ReactPaginate
                    className='flex felx-row gap-3'
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={10}
                    pageRangeDisplayed={3}
                    onPageChange={handleClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    )
}

export default PostList