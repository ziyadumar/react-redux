import React, { useEffect, useState } from 'react'
import Cats from '../../Components/Cat/Cats';
import { CatModel } from '../../Interfaces/cats.model';
import { fetchCats } from './CatsLogic';

const CatsPage = () => {
    const [cats, setCats] = useState<CatModel[]>([]);
    useEffect(() => {
        fetchCats().then(cats => { setCats(cats) });
    }, [])

    return (
        <>
            <Cats cats={cats} />
        </>
    )
}

export default CatsPage
