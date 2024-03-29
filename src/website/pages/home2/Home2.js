import React from 'react'
import Banner from './components/Banner'
import AboutPatch from "../about/components/AboutPatch";
import Services from '../service2/components/Services'
import Map from '../connect/components/Map'
import ContactForm from '../connect/components/ContactForm'
import Overlapabout from '../about/components/Overlapabout'
import AboutCounter from '../about/components/AboutCounter'
import Patch from '../home/components/Patch';
import OurTeam from '../home/components/OurTeam';

const Home2 = () => {
  return (
    <div>
      <Banner />
      <AboutPatch />
      <Services />
      <Overlapabout />
      <AboutCounter />
      <Patch />
      <OurTeam />
      <ContactForm />
      <Map />
    </div>
  );
}

export default Home2
