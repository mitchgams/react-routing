import React from 'react';
import ViewAPIButton from './ViewAPIButton';

const FilmBody = (props) => {
    return(
        <React.Fragment>
            <h6>Description:</h6>
            <p>{props.film.description}</p>
            <h6>Director:</h6> {props.film.director}
            <ViewAPIButton url={`./films/` + props.film.id} />
        </React.Fragment>
    );
}

export default FilmBody;