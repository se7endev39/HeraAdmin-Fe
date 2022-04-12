import React from "react";
import { useEffect, useState } from 'react'
import { withRouter } from "react-router";

import CardCollectionDetails from "../../component/Card/CardCollectionDetails";
import SectionTitle, { MenuWrapper, CollectionWrapper } from "../../component/SectionTitle";

import { useEthers, useEtherBalance } from "@usedapp/core"

const AssignRole = ({ history }) => {

  
return (
  <>
    <MenuWrapper className="animation-fadeInRight">
      <SectionTitle title="Assign Role" long />
    </MenuWrapper>

    
  </>
);
};
export default withRouter(AssignRole);
