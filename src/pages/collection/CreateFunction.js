import React from "react";
import { withRouter } from "react-router";

import CardCollectionDetails from "../../component/Card/CardCollectionDetails";
import SectionTitle, { MenuWrapper, CollectionWrapper } from "../../component/SectionTitle";

import { myCollection } from "../../tempData/data";

const CreateFunction = ({ history }) => {

  const onBuyCollect = () => {
  }

  return (
    <>
      <MenuWrapper className="animation-fadeInRight">
        <SectionTitle title="Create Function" long />
      </MenuWrapper>
      
    </>
  );
};

export default withRouter(CreateFunction);
