import Web3 from 'web3';

const getLibrary = (provider) => {

    return new Web3(provider);
};

export { getLibrary };