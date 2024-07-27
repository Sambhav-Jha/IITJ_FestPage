import FestCard from "../Components/FestCard";
import IgnusLogo from "../assets/Ignus.png";
import PrometeoLogo from "../assets/Prometeo.png";
import VarchasLogo from "../assets/Varchas.jpg";

export default function Fests() {
    return(
      <>
        <FestCard image={IgnusLogo} fest_name="Ignus" description="Ignus is the annual cultural fest of IIT Jodhpur."></FestCard>
        <FestCard image={PrometeoLogo} fest_name="Prometeo" description="Prometeo is the annual tech fest of IIT Jodhpur."></FestCard>
        <FestCard image={VarchasLogo} fest_name="Varchas" description="Varchas is the annual sports fest of IIT Jodhpur."></FestCard>
      </>
    );
  }