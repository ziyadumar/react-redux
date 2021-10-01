import React from 'react'
import { UserModel } from '../../Interfaces/user.model'
import User from './User'
import './UserList.scss';

const UserList = ({ list }: { list: UserModel[] }) => {
    return (
        <div className='user-list'>
            {list.map(user => (<User data={user} key={user.id} />))}
        </div>

    )
}


export default UserList
