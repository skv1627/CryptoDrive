import React, { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);
  const [errorIndices, setErrorIndices] = useState(new Set()); // Track indices of images that failed to load

  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;

    try {
      // Fetch data based on user input or account
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
      } else {
        dataArray = await contract.display(account);
      }

      console.log("Data Array:", dataArray); // Debug log

      // Create image elements from dataArray
      const imageElements = dataArray.map((imageUrl, index) => {
        // No need to construct the URL again if it's already complete
        const constructedUrl = imageUrl.startsWith('ipfs://') 
          ? `https://gateway.pinata.cloud/ipfs/${imageUrl.substring(6)}` 
          : imageUrl; // Use the URL directly if it already contains the gateway

        console.log("Constructed URL:", constructedUrl); // Log the constructed URL

        return (
          <img
            key={index}
            src={errorIndices.has(index) ? "https://via.placeholder.com/150" : constructedUrl} // Use placeholder if error occurred
            alt="" // Removed redundant alt text as per warning
            className="image-list"
            onError={() => {
              setErrorIndices(prev => new Set(prev).add(index)); // Track the index of the failed image
            }}
          />
        );
      });

      if (imageElements.length > 0) {
        setData(imageElements);
      } else {
        alert("No images to display");
      }
    } catch (e) {
      console.error("Error fetching data:", e);
      alert("Error fetching data. You may not have access or an error occurred.");
      return;
    }
  };

  return (
    <>
      <div className="image-list">
        {data}
      </div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      />
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};

export default Display;
