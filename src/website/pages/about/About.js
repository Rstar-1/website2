import React from 'react'
import Banner from './components/Banner'
import Patch from './components/AboutPatch'
import Aboutself from './components/Aboutself'
import Partner from '../home/components/Partner'
import AboutBlog from './components/AboutBlog'
import Overlapabout from './components/Overlapabout'
import AboutCounter from './components/AboutCounter'

const About = () => {
  return (
    <div>
      <Banner />
      <Patch />
      <Aboutself />
      <Overlapabout />
      <AboutCounter />
      <AboutBlog />
      <Partner />
    </div>
  )
}

export default About
