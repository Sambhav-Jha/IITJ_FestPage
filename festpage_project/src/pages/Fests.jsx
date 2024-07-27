import FestCard from "../Components/FestCard";
import IgnusLogo from "../assets/Ignus.png";
import PrometeoLogo from "../assets/Prometeo.png";
import VarchasLogo from "../assets/Varchas.jpg";
// import "../Styles/Fests.css"

import { Link, useMatch, useResolvedPath } from "react-router-dom"

// import desertbg from "../assets/desertbg"

export default function Fests() {
    return(
      <>
        
          <div className="festbg">
          <Link to="/ignus" className="fnp" target="_blank">
          <FestCard image={IgnusLogo} fest_name="Ignus" description="Ignus is the annual cultural fest of IIT Jodhpur."></FestCard>
          </Link>
          <Link to="/prometeo" className="fnp" target="_blank">
          <FestCard image={PrometeoLogo} fest_name="Prometeo" description="Prometeo is the annual tech fest of IIT Jodhpur."></FestCard>
          </Link>
          <Link to="/varchas" className="fnp" target="_blank">
          <FestCard image={VarchasLogo} fest_name="Varchas" description="Varchas is the annual sports fest of IIT Jodhpur."></FestCard>
          </Link>
          </div>

      </>
    );
  }
