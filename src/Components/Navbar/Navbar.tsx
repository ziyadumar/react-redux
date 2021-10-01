import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../Store/hooks';
import './Navbar.scss';

const Navbar = () => {
    const counter = useAppSelector(state => state.counter);
    return (
        <div className='navbar'>
            <img src="/static/media/logo.6ce24c58.svg" alt="" />
            <Link to={'/'} className='link'>
                <div className="box-1">
                    <div className="btn btn-one">
                        <span>HOME</span>
                    </div>
                </div>
            </Link >
            <Link to={'/posts'} className='link'>
                <div className="box-1">
                    <div className="btn btn-one">
                        <span>POSTS</span>
                    </div>
                </div></Link>
            <Link to={'/users'} className='link'>
                <div className="box-1">
                    <div className="btn btn-one">
                        <span>USERS</span>
                    </div>
                </div></Link>
            <div className='stats'>
                <article className="card">
                    <span className="background"></span>
                    <span className="icon uil uil-instagram"></span>
                    <span className="content">
                        {counter} Clicks
                    </span>
                </article>
            </div>
        </div>
    )
}

export default Navbar
