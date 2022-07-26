const Web3 = require("web3");
const fs = require("fs");

const QUORUMCONF = JSON.parse(fs.readFileSync("./chain.json")).quorum;

console.log(QUORUMCONF)

const web3 = new Web3( QUORUMCONF.rpcurl );

(async() => {
    const did_contract = new web3.eth.Contract( QUORUMCONF.contracts[0].abi, QUORUMCONF.contracts[0].address );
    const call_result = await did_contract.methods.getVersion().call();
    console.log(call_result)
})()
