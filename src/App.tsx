import {
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import './App.css';
import Main from "./components/Main";

function App() {
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'100vh'}}>
      <DynamicContextProvider
        settings={{
          environmentId: "8ca79aaa-84d9-4f9d-99bf-1a790ce22f60",
          walletConnectors: [
            EthereumWalletConnectors,
          ],
        }}
      >
        <Main />
      </DynamicContextProvider>
    </div>
  );
}

export default App;


// links to check https://docs.dynamic.xyz/gating/nft-token-gating
// https://docs.dynamic.xyz/react-sdk/hooks/usedynamiccontext
