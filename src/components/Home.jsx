import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const Home = () => {
    return (
        <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">What would you like to view?</h5>
                <Link to="./films" className="btn mr-3 btn-secondary">Films</Link>
                <Link to="./people" className="btn btn-secondary">People</Link>
            </div>
        </div>
    );
}

export default Home;