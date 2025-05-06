import HeroComponent from './Hero';
import Social from './SocialRes';
import Initiatives from './Initiatives';
import GetStartedComponent from '../home/getstarted';

const SocialResponsibilitiesPage = () => {
  return (
    <div>
      <HeroComponent />
      <Social />
      <Initiatives />
      <GetStartedComponent />
    </div>
  );
};

export default SocialResponsibilitiesPage;
