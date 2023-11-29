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
          environmentId: "2762a57b-faa4-41ce-9f16-abff9300e2c9",
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
