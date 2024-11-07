```mermaid
flowchart LR
  subgraph UserInterface [User Interface]
    A(Upload Image)
    B(Manage Access)
  end
  
  subgraph MetaMask [MetaMask]
    C(User Authentication)
    D(Transaction Signing)
  end
  
  subgraph EthereumBlockchain [Ethereum Blockchain]
    E(Solidity Smart Contract)
  end
  
  subgraph IPFS [IPFS via Pinata]
    F(Store Image Data)
  end

  A --> C
  C --> E
  E --> F
  B --> C
  C --> E
