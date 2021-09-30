import React from 'react'
import { PostModel } from '../../Interfaces/post.model'
import Post from './Post'

const PostList = ({ list }: { list: PostModel[] }) => {
    return (
        <>
            {list.map(prop => (<Post {...prop} key={prop.id}/>))}
        </>
    )
}

export default PostList
