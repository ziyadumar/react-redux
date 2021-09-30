import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../Store/hooks';
import './Navbar.scss';

const Navbar = () => {
    const counter = useAppSelector(state => state.counter);
    return (
        <div className='navbar'>
            <img src="" alt="" />
            <Link to={'/'}>Home</Link>
            <Link to={'/posts'}>Posts</Link>
            <div className='stats'>
                <div className='header'>Counter</div>
                <div className='count'>{counter}</div>
            </div>
        </div>
    )
}

export default Navbar
