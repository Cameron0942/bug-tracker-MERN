// import React from 'react';
// #f9f9f9

import Options from "./Options/Options";
import Content from "./Content/Content";

const DashboardMain = () => {
  return (
  <>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Options />
      <Content />
    </div>
  </>
  )
};

export default DashboardMain;