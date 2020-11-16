import Films from './Films';
import People from './People';
import Home from './Home';
import FilmData from './FilmData';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Fragment>
                <nav className="nav p-2 pl-4 bg-secondary rounded">
                    <h3 className="text-light mr-3 nav-font">Studio Ghibili API</h3>
                    <Link to="/films" className="btn mr-3 btn-primary">Films</Link>
                    <Link to="/people" className="btn btn-primary">People</Link>
                </nav>
                </Fragment>
                <Switch>
                    <Route exact path="/films" component={Films} />
                    <Route exact path="/people" component={People} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/films/:id" component={FilmData} />
                </Switch>
            </div>
      </Router>
    );
}

export default App;