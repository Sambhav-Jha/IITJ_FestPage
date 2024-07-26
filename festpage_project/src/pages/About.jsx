import Card from "../Components/Card.jsx";
import image1 from "../assets/boy1.png";
import image2 from "../assets/boy2.png";

function About(props) {
  return (
    <>
      <Card image={image1} name="Shivam Goyal" age={20} Batch="B23"></Card>
      <Card image={image2} name="Sambhav Jha" age={20} Batch="B23"></Card>
    </>
  );
}

export default About;
