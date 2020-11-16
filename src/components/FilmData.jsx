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
            return (
                <div className="card mb-2">
                    <div className="card-header">
                        <h5>{this.state.data.title}</h5>
                    </div>
                    <div className="card-body">
                        <p><b>Title:</b> {this.state.data.title}</p>
                        <p><b>Description:</b> {this.state.data.description}</p>
                        <p><b>Director:</b> {this.state.data.director}</p>
                        <p><b>Producer:</b> {this.state.data.producer}</p>
                        <p><b>Release Date</b> {this.state.data.release_date}</p>
                        <p><b>Rotten Tomato Score:</b> {this.state.data.rt_score}%</p>
                    </div>
                </div>
            );
        }
    }
}

export default FilmData;