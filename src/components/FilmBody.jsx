import React from 'react';
import ViewAPIButton from './ViewAPIButton';

const FilmBody = ({ film }) => {
    const {description, director, id} = film;
    return(
        <React.Fragment>
            <h6>Description:</h6>
            <p>{description}</p>
            <h6>Director:</h6> {director}
            <ViewAPIButton url={`./films/` + id} />
        </React.Fragment>
    );
}

export default FilmBody;