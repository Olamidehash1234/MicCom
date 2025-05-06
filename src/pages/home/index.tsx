import HeroComponent from './Hero'
import ProductCategory from './productcat'
import WhyChooseUs from './whychooseus';
import GetStarted from './getstarted';

const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <ProductCategory />
      <WhyChooseUs />
      <GetStarted />
    </div>
  );
};

export default HomePage;
