// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AboutMe from '../pages/aboutme';
import SkillsCard from '../pages/skills';
import Portafolio from '../pages/portafolio';
import NavBar from '../components/NavBar.js';
import '../pages/portafolio.css';



function HomeCarousel() {

  const [index, setIndex] = useState(0);
  console.log(index);
  console.log(setIndex);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
    <div>

      <NavBar handleSelect={handleSelect} />

      <Carousel class="" activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" interval={null}>
        <Carousel.Item id="aboutme" className='h-100'>
          <div className='mx-auto col-11 h-100'>
            <AboutMe />
          </div>

        </Carousel.Item>
        <Carousel.Item id="habilidades" className='h-100 '>
          <div className='mx-auto col-10 col-md-11 h-100'>
            <SkillsCard />
            
          </div>

        </Carousel.Item>
        <Carousel.Item id="portafolio" className='h-100'>
          <div className='mx-auto col-11 '>
            <Portafolio />
          </div>

        </Carousel.Item>
      </Carousel>



    </div>
  );
}

export default HomeCarousel;

