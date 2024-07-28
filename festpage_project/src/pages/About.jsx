import Card from "../Components/Card.jsx";
import image1 from "../assets/boy1.png";
import image2 from "../assets/boy2.png";

function About(props) {
  return (
    <>
      <Card image={image1} name="Shivam Goyal" age={20} Batch="B23" rollNo="B23CM1036" insta="https://www.instagram.com/shivshiv_goyal/" linkedin="https://www.linkedin.com/in/shivam-goyal-85b63928a/"></Card>
      <Card image={image2} name="Sambhav Jha" age={20} Batch="B23" rollNo="B23MT1036" insta="https://www.instagram.com/sammy_ftw_141/" linkedin="https://www.linkedin.com/in/sambhav-jha-61412528a/"></Card>
    </>
  );
}

export default About;
