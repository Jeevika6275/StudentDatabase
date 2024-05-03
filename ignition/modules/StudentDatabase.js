const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("StudentDatabaseModule", (m) => {
    const students= m.contract("StudentDatabase");



  return { students };
});