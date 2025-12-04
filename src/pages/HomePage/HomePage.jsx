import React from "react";
import Head from "./HomePageSection/Head";
import Who from "./HomePageSection/Who";
import WhatWeDo from "./HomePageSection/WhatWeDo";
import OurProjects from "./HomePageSection/OurProjects";
import Struture from "./HomePageSection/Struture";
import Status from "./HomePageSection/Status";
import Client from "./HomePageSection/Client";

const HomePage = () => {
  return (
    <div>
      <Head />
      <Who />
      <WhatWeDo />
      <OurProjects />
      <Struture />
      <Status />
      <Client />  
    </div>
  );
};

export default HomePage;
