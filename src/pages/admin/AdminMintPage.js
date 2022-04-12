import React, { useState } from "react";
import { withRouter } from "react-router";
import Web3 from "web3";
import { useEthers, useEtherBalance } from "@usedapp/core";
// import { useParams } from 'react-router-dom'

import AdminMint from "../../component/Card/AdminMint";
import SectionTitle, { MenuWrapper, CollectionWrapper } from "../../component/SectionTitle";
import DibbsERC721Upgradeable from "../../contract/DibbsERC721Upgradeable/DibbsERC721Upgradeable";
import { ITEM_KIND_MAP } from "../../utils/dibbs.mint.data"

const CollectionDetails = ({ history }) => {
  const { activateBrowserWallet, account } = useEthers();
  // const param = useParams()
  const [dappy, setDappy] = useState({
    id: '111',
    name: 'test1',
    details: 'my details test 1',
    supply: 'test supply 1',
    price_d: 324,
    price_f: 222,
    image: '',
    amount: 10,
  });

  console.log(account);

  const onSuccess = itemId => {
    // Wait for new listing to be created by the API
    // Mutations don't work because they get overwritten when the new page is loaded
    setTimeout(() => {
      history.push('/collections/' + itemId);
    }, 1000)
  }

  const onMintCollect = async () => {
    console.log("onMintCollect")
    const getRandId = () => Math.floor(Math.random() * 10);
    let new_kindid = getRandId();
    const getRandSerialId = () => Math.floor(Math.random() * 1000000);
    let new_kindSerialId = getRandSerialId();
    const integer = parseInt(1, 10);

    if (integer < 1 || integer > 3) {
      console.log("amount is not good");
    } else {
      if ((window).ethereum) {
        await (window).ethereum.send("eth_requestAccounts");
        (window).web3 = new Web3((window).ethereum);

        try {
          const balance = await DibbsERC721Upgradeable.methods.balanceOf(account).call();
          const pricePerItem = 0;
          const totalPrice = pricePerItem * integer;
          const value = (window).web3.utils.toWei(
            totalPrice.toString(),
            "ether"
          );
          console.log("mint","https://dibbs.testURI/", account, ITEM_KIND_MAP[new_kindid].name, ITEM_KIND_MAP[new_kindid].grade, ITEM_KIND_MAP[new_kindid].serial);
          DibbsERC721Upgradeable.methods
            .mint("https://dibbs.testURI/", account, ITEM_KIND_MAP[new_kindid].name, ITEM_KIND_MAP[new_kindid].grade, new_kindSerialId.toString())
            .send({ from: account, value: value})
            .on("transactionHash", (hash) => {
              let messageNotification = "https://mumbai.polygonscan.com/tx/" + hash;
              console.log(messageNotification);
            })
            .on("Minted",(_to, _name, _grade, _serial, id) => {
              console.log("Minted",_to, _name, _grade, _serial, id);
            })
            .on("error", (error, receipt) => {
              console.log(error,"Minting was not successful");
            });
        } catch (e) {
          console.log("Minting was not successful",e);
        }
      } else {
        console.log("Please install Metamask to use this dApp!");
      }
    }    
  };

  // async function getMintedList() {
  //   try {
  //     const balance = await DibbsERC721Upgradeable.methods.balanceOf(account).call();
  //     let temp=[];
  //     for( var i = 0; i < balance; i++ )
  //     {
  //       const token_id = await DibbsERC721Upgradeable.methods.tokenOfOwnerByIndex(account,i).call();
  //       console.log('token_id',token_id);
  //       temp.push(token_id);
        
  //     }
  //     settokenIDs(temp);
  //     return true;
  //   } catch (e) {
  //   }
  //   return false;
  // }


  return (
    <>
      <MenuWrapper className="animation-fadeInRight">
        <SectionTitle title="ADMINISTRATOR" long />
      </MenuWrapper>
      {/* <MinterLoader isLoading={true} /> */}
      <CollectionWrapper>
        { dappy && 
          <AdminMint
            card={dappy}
            name
            details
            price_d
            price_f
            onMintCollect={onMintCollect}
          />
        }
      </CollectionWrapper>
    </>
  );
};

export default withRouter(CollectionDetails);
