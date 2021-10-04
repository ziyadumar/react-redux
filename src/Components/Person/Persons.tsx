import React from 'react'
import { PersonModel } from '../../Interfaces/person.model'
import Person from './Person'
import './Person.scss'

const Persons = ({ persons }: { persons: PersonModel[] }) => {
    return (
        <div className="person-list">
            {persons && persons.map(person => (<Person person={person} />))}
        </div>
    )
}

export default Persons
