const { Component } = require("react");

class FilmData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            data: null
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.state.id}`)
        .then(response => response.json())
        .then(data => this.setState({data}))
        .catch(e => console.log(e));
    }
    
    render() {
        console.log(this.state.data);
        if(this.state.data  === null) {
            return <h1>Loading...</h1>;
        } else {
            const { title, description, director, producer, release_date, rt_score } = this.state.data;
            return (
                <div className="card mb-2">
                    <div className="card-header">
                        <h5>{title}</h5>
                    </div>
                    <div className="card-body">
                        <p><b>Title:</b> {title}</p>
                        <p><b>Description:</b> {description}</p>
                        <p><b>Director:</b> {director}</p>
                        <p><b>Producer:</b> {producer}</p>
                        <p><b>Release Date</b> {release_date}</p>
                        <p><b>Rotten Tomato Score:</b> {rt_score}%</p>
                    </div>
                </div>
            );
        }
    }
}

export default FilmData;