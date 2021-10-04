import React from 'react'
import { ConferenceModel } from '../../Interfaces/conference.model'

const Conference = (data: ConferenceModel) => {
    return (
        <>
            <div className="Container">
                <img className="Container__image" src="" alt="" />

                <h2 className="Container__h2"></h2>
                <p className="Container__p"></p>
            </div>
        </>
    )
}

export default Conference
