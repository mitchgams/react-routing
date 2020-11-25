const ViewAPIButton = ({ url }) => {
    return (
        <div className="p-2 right">
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">View API</a>
        </div>
    );
}

export default ViewAPIButton;