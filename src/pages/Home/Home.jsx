import React from 'react'
import Hero from '../../components/Hero/Hero'
import Extrience from '../../components/Extrience/Extrience'
import Group from '../../components/Group/Group'
import About from '../../components/About/About'

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