import React from 'react'
import { CatModel } from '../../Interfaces/cats.model'
import './Cat.scss'
const Cat = ({ cat }: { cat: CatModel }) => {
    return (
        <div className="Container">
            <img className="Container__image" src={cat.image?.url} alt='' />

            <h2 className="Container__h2">{cat.name}</h2>
            <p className="Container__p">{cat.origin}</p>
        </div>
    )
}

export default Cat
