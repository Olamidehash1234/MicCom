import HeroComponent from './Hero';
import Header from './Header';
import GetQuality from '../../pages/products/GetQuality';
import Projects from './Projects'

const ProjectPage = () => {
  return (
    <div>
      <HeroComponent />
      <Header />
      <Projects />
      <GetQuality />
    </div>
  );
};

export default ProjectPage;
