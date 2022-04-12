import Web3 from "web3";
import Build from "./UnstructuredProxy.json";

import {
  dibs_unstructuredproxy_address
} from '../../config'

let tokenContract: any;
// let window: any;
if ((window as any).ethereum) {
  (window as any).ethereum.send("eth_requestAccounts");
  (window as any).web3 = new Web3((window as any).ethereum);

  // if ((window as any).web3 && (window as any).web3.currentProvider) {
  //   const web3 = new Web3((window as any).web3.currentProvider);

  // const { abi } = Build;

  tokenContract = new (window as any).web3.eth.Contract(
    Build as any,
    dibs_unstructuredproxy_address
  );
}

export default tokenContract;
