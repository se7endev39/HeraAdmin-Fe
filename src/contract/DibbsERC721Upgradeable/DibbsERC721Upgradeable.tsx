import Web3 from "web3";
import Build from "./DibbsERC721Upgradeable.json";

// import {
//   dibs_erc721_address
// } from '../../../config'
import { dibs_erc721_address } from "../../config";

let tokenContract: any;
// let window: any;
if ((window as any).ethereum) {
  (window as any).ethereum.send("eth_requestAccounts");
  (window as any).web3 = new Web3((window as any).ethereum);

  tokenContract = new (window as any).web3.eth.Contract(
    Build.abi as any,
    dibs_erc721_address
  );
}

export default tokenContract;
