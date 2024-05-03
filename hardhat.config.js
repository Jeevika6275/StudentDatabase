
  const{builModules}=require("@nomicfoundation/hardhat-toolbox");
  /** @type import('hardhat/config').HardhatUserConfig */
  module.exports = {
    solidity: "0.8.24",
    networks:{
    hardhat:{},
    sepolia:{
      url:"https://sepolia.infura.io/v3/0bafea4f044c47d4a371d2a658c3d021",
      accounts:[process.env.PRIVATE_KEY || 'b81d64363420a31807c29af2a21b09a06046816ae38c7363a891beaf12acce25']
    }
  }};
