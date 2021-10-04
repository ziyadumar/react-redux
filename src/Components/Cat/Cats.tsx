import React from 'react'
import { CatModel } from '../../Interfaces/cats.model'
import Cat from './Cat'

const Cats = ({ cats }: { cats: CatModel[] }) => {
    console.log(cats);
    
    return (
        <div className="cats__content">
            {cats && cats.map(cat => (<Cat cat={cat} />))}
        </div>
    )
}

export default Cats
