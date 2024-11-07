import React, { useState, useEffect } from "react"; // Import React and hooks
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { ethers } from "ethers"; // Correct import
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [account, setAccount] = useState(""); // State to store connected account
  const [contract, setContract] = useState(null); // State to store contract instance
  const [provider, setProvider] = useState(null); // State to store provider instance
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const loadProvider = async () => {
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum); // Correct usage for provider initialization

        // Event listeners for network and account changes
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        try {
          // Request accounts from the browser wallet
          await provider.send("eth_requestAccounts", []);
          
          // Get signer and address
          const signer = await provider.getSigner(); 
          const address = await signer.getAddress(); // Get the connected wallet address
          setAccount(address);

          // Contract deployment address (Ensure this address is correct)
          const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
          const contract = new ethers.Contract(contractAddress, Upload.abi, signer);
          setContract(contract);
          setProvider(provider);
          console.log("Provider and contract initialized successfully");
        } catch (error) {
          console.error("Error initializing provider or contract:", error);
        }
      } else {
        console.error("Please install MetaMask!");
      }
    };

    loadProvider(); // Initialize provider and contract on mount
  }, []);

  return (
    <>
      {/* Share button and modal */}
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}

      <div className="App">
        <h1 style={{ color: "white" }}>CryptoDrive</h1>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

        {/* Account info */}
        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>

        {/* FileUpload component */}
        <FileUpload
          account={account} // Pass account state
          provider={provider} // Pass provider state
          contract={contract} // Pass contract instance
        ></FileUpload>

        {/* Display component */}
        <Display contract={contract} account={account}></Display>
      </div>
    </>
  );
}

export default App;
