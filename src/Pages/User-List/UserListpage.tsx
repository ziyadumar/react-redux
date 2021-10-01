import { useEffect, useState } from 'react'
import { decrement, increment } from '../../Store/actions';
import { Button } from '../../Components/styled-components/Button.style';
import PostList from '../../Components/Post/PostList';
import useSize from '../../Hooks/screenSize';
import { PostModel } from '../../Interfaces/post.model';
import { useAppDispatcher } from '../../Store/hooks';
import { fetchData } from './UserList-Logic';
import { UserModel } from '../../Interfaces/user.model';
import UserList from '../../Components/User/UserList';

const UserListPage = () => {

    // custom dispatch call
    const dispatch = useAppDispatcher();

    // react hook
    const [users, setUsers] = useState<UserModel[]>([]);

    // custom hook
    const onSmallScreen = useSize();

    // call api
    useEffect(() => {
        // extracted the logic to separate file - to avoid redeclaration of same fn in case of rerender
        fetchData().then(users => { setUsers(users); });
    }, []) // no dependencies - only executed once.

    return (
        <>
            <UserList list={users} />
        </>
    )
}

export default UserListPage
