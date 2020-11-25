import { Component } from 'react';
import Card from './Card';

class Films extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => this.setState({data}))
        .catch(e => console.log(e));
    }

    proccessData() {
        let listData = this.state.data.map((film) => {
            return <Card endpoint={'film'} key={film.id} data={film} title={film.title} />
        });
        return listData;
    }

    render() {
        return this.proccessData();
    }
}

export default Films;