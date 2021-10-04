import { PersonModel } from '../../Interfaces/person.model'
import './Person.scss'

const Person = ({ person }: { person: PersonModel }) => {
    return (
        <div>
            <input type="checkbox" id={person.id.name} className="more" aria-hidden="true" />
            <article className='article'>
                <div className="front">
                    <div className="inner">
                        <div className="border">
                            <img
                                src={person.picture.large}
                            />
                        </div>
                        <h2>
                            {person.name.first}
                        </h2>
                        <h3>
                            {person.location?.city}
                        </h3>
                        <label className='button' htmlFor={person.id?.name}>
                            <span>More</span>
                        </label>
                    </div>
                </div>
                <div className="back">
                    {/* Hello */}
                </div>
            </article>
        </div>
    )
}

export default Person
