import React from 'react'
import Hero from '../../components/Hero/Hero'
import Extrience from '../../components/Extrience/Extrience'
import About from '../Aboutpage/Aboutpage'
import Group from '../../components/Group/Group'

function Home() {
  return (
    <div>
        <Hero/>
        <Extrience/>
        <About/>
        <Group/>
    </div>
  )
}

export default Home