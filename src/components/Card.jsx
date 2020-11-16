import FilmBody from './FilmBody';
import PersonBody from './PersonBody';

const Card = (props) => {
    let chooseBody  = () => {
        if(props.endpoint === 'film') {
            return <FilmBody film={props.data} />;
        } else {
            return <PersonBody person={props.data} />;
        }
    }

    return(
        <div className="card mb-2" key={props.data.id}>
            <div className="card-header">
            <h5>{props.title}</h5>
            </div>
            <div className="card-body">
                {chooseBody()}
            </div>
      </div>
    );
}

export default Card;