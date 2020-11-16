import React from 'react';
import ViewAPIButton from './ViewAPIButton';

const PersonBody = (props) => {
    return(
        <React.Fragment>
            <p><b>Name:</b> {props.person.name}</p>
            <p><b>Age:</b> {props.person.age}</p>
            <p><b>Gender:</b> {props.person.gender}</p>
            <p><b>Eye Color:</b> {props.person.eye_color}</p>
            <p><b>Hair Color:</b> {props.person.hair_color}</p>
            <ViewAPIButton url={`https://ghibliapi.herokuapp.com/people/` + props.person.id} />
        </React.Fragment>
    );
}

export default PersonBody;