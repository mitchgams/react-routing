import { Component } from 'react';
import Card from './Card';

class Films extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(response => response.json())
        .then(data => this.setState({data}))
        .catch(e => console.log(e));
    }

    proccessData() {
        let listData = this.state.data.map((person) => {
            return <Card endpoint={'person'} key={person.id} data={person} title={person.name} />
        });
        return listData;
    }

    render() {
        if(this.state.data === null) {
            return <h1>Loading...</h1>;
        } else return this.proccessData();
    }
}

export default Films;