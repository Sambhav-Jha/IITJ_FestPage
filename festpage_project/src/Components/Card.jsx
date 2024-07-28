import PropTypes from "prop-types";
import insta from "../assets/instalogo.png";
import linkedin from "../assets/linkedinlogo.svg";
function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="404" className="card-image" />
      <p className="dev-name">
        <b>Name: {props.name}</b>
      </p>
      <p>Age: {props.age}</p>
      <p>Roll No.: {props.rollNo}</p>
      <section className="Social">
        <a href={props.insta}>
          <img
            style={{ maxWidth: 20, maxHeight: 20 }}
            src={insta}
            alt="insta"
          />
          Instagram
        </a>
        <br />
        <a href={props.linkedin}>
          <img
            style={{ maxWidth: 20, maxHeight: 20 }}
            src={linkedin}
            alt="linkedin"
          />
          LinkedIn
        </a>
      </section>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  image: PropTypes.string.isRequired,
  rollNo: PropTypes.string,
  insta: PropTypes.string,
  linkedin: PropTypes.string,
};

Card.defaultProps = {
  name: "Dev name",
  age: 19,
  image: "",
  rollNo: "Bxxxxxxxx",
  insta: "/insta",
  linkedin: "/linkedin",
};

export default Card;
