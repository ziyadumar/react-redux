import { useEffect, useState } from 'react'
import { decrement, increment } from '../../Store/actions';
import { Button } from '../../Components/styled-components/Button.style';
import PostList from '../../Components/Post/PostList';
import useSize from '../../Hooks/screenSize';
import { PostModel } from '../../Interfaces/post.model';
import { useAppDispatcher } from '../../Store/hooks';
import { fetchData } from './HomeLogic';

const PostListPage = () => {

    // custom dispatch call
    const dispatch = useAppDispatcher();

    // react hook
    const [posts, setPosts] = useState<PostModel[]>([]);

    // custom hook
    const onSmallScreen = useSize();

    // call api
    useEffect(() => {
        // extracted the logic to separate file - to avoid redeclaration of same fn in case of rerender
        fetchData().then(posts => { setPosts(posts); });
    }, []) // no dependencies - only executed once.

    return (
        <>
            <div>
                Something for the Homepage
            </div>
            <Button background-color='green' onClick={() => dispatch(increment())}>+</Button>
            <Button background-color={onSmallScreen ? 'red ' : 'yellow'} onClick={() => dispatch(decrement())}>-</Button>
            <PostList list={posts} />
        </>
    )
}

export default PostListPage
