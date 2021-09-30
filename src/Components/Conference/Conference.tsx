import React from 'react'
import { ConferenceModel } from '../../Interfaces/conference.model'

const Conference = (data: ConferenceModel) => {
    return (
        <>
            <div>{data.description}</div>
            <div>{data.url}</div>
        </>
    )
}

export default Conference
