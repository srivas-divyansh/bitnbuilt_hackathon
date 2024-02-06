import Upload from "./components/abi/Upload.json"
import { useState, useEffect } from "react";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Model from "./components/Model";
const ethers = require("ethers");

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });
  const [openModel, setOpenModel] = useState(false);
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xc134Fa183e879607d940f6CaD8aB1847178104F7";
      const contractABI = Upload.abi;
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

          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
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
  // console.log(state);
  return (
    <>
      {!openModel && (
        <button className="share"
          onClick={() => setOpenModel(true)}>Share</button>
      )}{" "}
      {openModel && (
        <Model setOpenModel={setOpenModel}
          contract={state.contract} />
      )}
      <div className="App">
        <h1>G-drive 3.0</h1>
        <br />
        <p>Account: {account}</p>
        <div>
          <FileUpload
            account={account}
            provider={state.provider}
            contract={state.contract} />
          <br />
          <br />
          <Display
            contract={state.contract}
            account={account}
          />
        </div>
      </div>
    </>
  )
}
export default App;
