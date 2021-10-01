import React from 'react'
import { UserModel } from '../../Interfaces/user.model';
import './User.scss';


const User = ({ data }: { data: UserModel }) => {
    return (
        <div>
            <input type="checkbox" id={data.id.toString()} className="more" aria-hidden="true" />
            <article className='article'>
                <div className="front">
                    <div className="inner">
                        <div className="border">
                            <img
                                src="https://cdn.jsdelivr.net/gh/frontend-joe/assets@main/ritik-small.png"
                            />
                        </div>
                        <h2>
                            {data.name}
                        </h2>
                        <h3>
                            {data.address?.city}
                        </h3>
                        <label className='button' htmlFor={data.id.toString()}>
                            <span>More</span>
                        </label>
                    </div>
                </div>
                <div className="back">
                    Hello
                </div>
            </article>
        </div>
    )
}

export default User
