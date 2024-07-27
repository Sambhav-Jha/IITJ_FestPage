import PropTypes from "prop-types";
function FestCard(props){
    return(
        <div className="fest-card">
            <img className="fest-card-image" src={props.image} alt="404" />
            <h2>{props.fest_name}</h2>
            <p>{props.description}</p>
        </div>
    );
}

FestCard.propTypes={
    image: PropTypes.string.isRequired,
    fest_name: PropTypes.string,
    description: PropTypes.string,
}

FestCard.defaultProps={
    fest_name: "Fest Name",
    description: "Fest Description",
    image: "",
}

export default FestCard;