import HomeSection from './home/video';
import ctaImage from '../assets/Sparkle_Clapper.png';

const Hero = (props) => {
  return (
    <section
      className="hero-section hero-content"
      // style={{ backgroundImage: `url(/images/${props.index - 1}.png)` }}
      ref={props.registerSection(props.index)}
    >
      <HomeSection />
      <img src={ctaImage} />
    </section>
  );
};

export default Hero;
