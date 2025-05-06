import HeroComponent from "./Hero";
import AwardsCert from './Awards';
import Dropdown from './dropdown';
import GetStartedComponent from "../home/getstarted";


const AwardPage = () => {
  return (
    <div>
      <HeroComponent />
      <AwardsCert />
      <Dropdown />
      <GetStartedComponent />
    </div>
  );
};

export default AwardPage;
