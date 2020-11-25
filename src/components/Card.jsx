import FilmBody from './FilmBody';
import PersonBody from './PersonBody';

const Card = ({ data, title, endpoint }) => {
    let chooseBody  = () => {
        if(endpoint === 'film') {
            return <FilmBody film={data} />;
        } else {
            return <PersonBody person={data} />;
        }
    }

    return(
        <div className="card mb-2" key={data.id}>
            <div className="card-header">
            <h5>{title}</h5>
            </div>
            <div className="card-body">
                {chooseBody()}
            </div>
      </div>
    );
}

export default Card;