Here's a README file for **CryptoDrive** with proper Markdown formatting for GitHub:

---

# CryptoDrive
A Decentralized Image Upload and Sharing Platform

CryptoDrive is a decentralized platform for securely uploading and sharing images on the blockchain. It combines Solidity smart contracts with a React front-end, enabling users to upload images to IPFS (InterPlanetary File System) and manage access permissions for specific users via the blockchain.

## Video Presentation
[Watch Video](https://youtu.be/lcp-Wx9RHvU)

---

## Key Features

- **Decentralized Storage**: Images are stored on IPFS, ensuring decentralized, secure, and immutable storage.
- **Smart Contract Functionality**: Ethereum-based smart contracts (written in Solidity) manage ownership and access permissions for uploaded images.
- **Access Control**: Users can grant or revoke access to their images for specific individuals via the smart contract.

---

## Technologies

- **Solidity**: Manages ownership and access control through smart contracts on the Ethereum blockchain.
- **React**: Provides a user-friendly interface for image uploads and access management.
- **IPFS**: Serves as a decentralized storage solution for uploaded images.

---

## Setup & Usage

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/decentralized-image-upload.git
   ```

2. **Install Dependencies for Hardhat**:
   ```bash
   cd Dgdrive3.0   # Navigate to the project root directory
   npm install     # Install Hardhat dependencies
   ```

3. **Compile and Deploy the Smart Contract**:
   - Compile the contract:
     ```bash
     npx hardhat compile
     ```
   - Deploy the contract to an Ethereum testnet or local environment:
     ```bash
     npx hardhat run scripts/deploy.js --network <network-name>
     ```

4. **Set Up the React Front-End**:
   ```bash
   cd client         # Navigate to the React client directory
   npm install       # Install React dependencies
   npm start         # Start the React application
   ```

---

### Configuration

1. **Environment Variables**:
   - Obtain Pinata API keys for IPFS interaction.
   - Update the `FileUpload.js` component with your Pinata API keys.

2. **Update Contract Address**:
   - After deploying the smart contract, replace the contract address in `App.js` within the React application.

---

### Usage

1. **Set Up MetaMask**:
   - Ensure MetaMask is installed in your browser for Ethereum blockchain interactions.

2. **Image Upload and Access**:
   - Upload an image on Pinata before selecting "Get Data." If no image is uploaded, an error stating "You don't have access" will appear.
   - To view images shared by other users, enter their Ethereum address in the designated box and click "Get Data." Access is only available if permission has been granted via the smart contract.

Following these steps will help you smoothly navigate the platform, maintain access control, and avoid potential errors.

---

This project demonstrates the power of blockchain in creating decentralized and secure storage solutions. Enjoy building with CryptoDrive!
