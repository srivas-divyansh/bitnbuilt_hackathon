import abi from "./components/abi/Upload.json"
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Model from "./components/Model";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountChanged", () => {
            window.location.reload();
          })

          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install Metamask");
        }
      } catch (error) {
        console.log(error);
      }
    }
    connectWallet();
  }, []);
  console.log(state);
  return (
    <div className="App">
    <h1>G-drive 3.0</h1>
    <br />
    <p>Account: {account}</p>
    </div>
  )
}
export default App;
