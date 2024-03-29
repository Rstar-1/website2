import React from 'react'
import Banner from './components/Banner'
import Patch from '../home/components/Patch'
import Quote from '../home/components/Quote'
import Information from '../home/components/Information'
import Services from './components/Services'

const Service = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Patch />
      <Quote />
      <Information />
    </div>
  )
}

export default Service
