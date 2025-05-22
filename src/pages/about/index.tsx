import HeroComponent from './Hero'
import Aboutcomponent from './AboutUs'
// import Values from './Values'
// import Purpose from './Purpose'
import GetStartedComponent from '../home/getstarted'

const AboutPage = () => {
  return (
    <div>
      <HeroComponent />
      <Aboutcomponent />
      {/* <Values /> */}
      {/* <Purpose /> */}
      <GetStartedComponent />
    </div>
  );
};

export default AboutPage;
