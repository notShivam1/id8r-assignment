import { useDynamicContext, DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Main = () => {
  const { primaryWallet } = useDynamicContext();

  const signMessage = async (primaryWallet:any) => { //TODO give this a type
    console.log('here1');
    if (!primaryWallet) return null;
    else {
      console.log(primaryWallet.address);
    }
    console.log('here2');
    const signer = await primaryWallet.connector.getSigner();

    console.log(primaryWallet)

    return signer ? await signer.signMessage("example") : null;
  };

  return (
    <div>
      <DynamicWidget />
      <button onClick={() => signMessage(primaryWallet)}>Sign Message</button>
    </div>
  );
};

export default Main;