import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { useParams } from 'react-router-dom'

import CardCollectionDetails from "../../component/Card/CardCollectionDetails";
import SectionTitle, { MenuWrapper, CollectionWrapper } from "../../component/SectionTitle";

import { query } from '@onflow/fcl'

const LockHerc = ({ history }) => {
  const param = useParams()
  const { collectID } = param;
  const [dappy, setDappy] = useState(null);
  


  return (
    <>
      <MenuWrapper className="animation-fadeInRight">
        <SectionTitle title="You've Chosen to Lock" long />
      </MenuWrapper>
      
    </>
  );
};

export default withRouter(LockHerc);
