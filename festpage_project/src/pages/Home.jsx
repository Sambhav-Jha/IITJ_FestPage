import IITJ_campus from "../assets/iitjcampus.jpg"

export default function Home() {
    return(
      <>
        <img className="IITJ-campus-image" src={IITJ_campus} alt="IITJ campus pic" />
        <h1>Indian Institute of Technology Jodhpur</h1>
        <p>Indian Institute of Technology Jodhpur (IIT Jodhpur), located in Jodhpur, Rajasthan, is one of the prestigious Indian Institutes of Technology (IITs) in India. Established in 2008, IIT Jodhpur is part of the second wave of IITs and has rapidly developed a reputation for academic excellence, cutting-edge research, and innovative approaches to education.</p>
        <div className="home-div">
        <h3>Key Highlights:</h3>
        <h4>Campus:</h4>
        <ul>
          <li><b>Undergraduate Programs:</b> Offers B.Tech in various disciplines such as Computer Science and Engineering, Electrical Engineering, Mechanical Engineering, Civil and Infrastructure Engineering, and more.</li>
          <li><b>Postgraduate Programs:</b> Includes M.Tech, M.Sc, M.S. (by Research), and Ph.D. programs in multiple disciplines.</li>
          <li><b>Interdisciplinary Programs:</b> Promotes interdisciplinary research and learning through programs like AI and Data Science, Robotics, Cyber-Physical Systems, and Bioscience and Bioengineering.</li>
        </ul>
        </div>
      </>
    );
  }