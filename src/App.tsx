import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Main from "./components/Main";
import './App.css';

function App() {
  console.log(process.env.REACT_APP_DYNAMIC_KEY)
  const dynamicKey = process.env.REACT_APP_DYNAMIC_KEY as string; // imported from .env

  return (
    <div className="container">
      <DynamicContextProvider
        settings={{
          environmentId: dynamicKey ,
          walletConnectors: [
            EthereumWalletConnectors,
          ],
        }}
      >
         {/* Main component containing the main content of the app */}
        <Main />
      </DynamicContextProvider>
    </div>
  );
}

export default App;