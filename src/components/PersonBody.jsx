import React from 'react';
import ViewAPIButton from './ViewAPIButton';

const PersonBody = ({ person }) => {
    const { name, age, gender, eye_color, hair_color, id } = person;
    return(
        <React.Fragment>
            <p><b>Name:</b> {name}</p>
            <p><b>Age:</b> {age}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Eye Color:</b> {eye_color}</p>
            <p><b>Hair Color:</b> {hair_color}</p>
            <ViewAPIButton url={`https://ghibliapi.herokuapp.com/people/` + id} />
        </React.Fragment>
    );
}

export default PersonBody;