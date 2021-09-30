import React from 'react'
import { ConferenceModel } from '../../Interfaces/conference.model'
import Conference from './Conference'

const ConfList = (data: ConferenceModel[]) => {
    return (
        <>
            {data.map((elem) => (
                <Conference {...elem} />
            ))}
        </>
    )
}

export default ConfList
