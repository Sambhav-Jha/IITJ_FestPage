import PropTypes from "prop-types";
function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="404" className="card-image"/>
      <p className="dev-name"><b>Name: {props.name}</b></p>
      <p>Age: {props.age}</p>
      <p>Batch: {props.batch}</p>
      <p>Roll No.: {props.rollNo}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  batch: PropTypes.string,
  image: PropTypes.string.isRequired,
  rollNo: PropTypes.string
};

Card.defaultProps = {
  name: "Dev name",
  age: 19,
  batch: "B23",
  image: "",
  rollNo: "Bxxxxxxxx"
};

export default Card;
