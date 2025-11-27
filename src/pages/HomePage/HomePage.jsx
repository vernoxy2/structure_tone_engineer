import React from 'react'
import Head from './HomePageSection/Head'
import Who from './HomePageSection/Who'
import WhatWeDo from './HomePageSection/WhatWeDo'
import OurProjects from './HomePageSection/OurProjects'


const HomePage = () => {
  return (
    <div>
      <Head/>
      <Who/>
    <WhatWeDo/>
    <OurProjects/>  
    </div>
  )
}

export default HomePage
