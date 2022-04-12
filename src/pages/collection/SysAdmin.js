import React from "react";
import { useEffect, useState } from 'react'
import { withRouter } from "react-router";

import CardCollectionDetails from "../../component/Card/CardCollectionDetails";
import SectionTitle, { MenuWrapper, CollectionWrapper } from "../../component/SectionTitle";

import { query } from '@onflow/fcl'
import { useEthers, useEtherBalance } from "@usedapp/core"
import DibbsERC721Upgradeable from "../../contract/DibbsERC721Upgradeable/DibbsERC721Upgradeable"

const SysAdmin = ({ history }) => {
  const { activateBrowserWallet, account } = useEthers();
  const [dappies, setDappies] = useState([]);
  const [tokenIDs, settokenIDs] = useState([]);
  const onBuyCollect = (item) => {
  }



return (
  <>
    <MenuWrapper className="animation-fadeInRight">
      <SectionTitle title="Welcome SysAdmin" long />
    </MenuWrapper>

  </>
);
};
export default withRouter(SysAdmin);
