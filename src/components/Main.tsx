import { DynamicWidget, useDynamicScopes } from "@dynamic-labs/sdk-react-core";

const Main = () => {
  // Using the useDynamicScopes hook to check user scopes
  const { userHasScopes } = useDynamicScopes();

  // Define source URLs for images
  const imageSrcOne = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjn0ZSVp2q3FjDLe0W-23kOii33AyTd0S56HM4YplXhI0s8s1qUf5v8D39kxAqQTh8mWk&usqp=CAU";
  const imageSrcTwo = "https://pngimg.com/uploads/number2/Number%202%20PNG%20images%20free%20download_PNG14925.png";

  return (
    <div>
      <DynamicWidget />
      {userHasScopes("HoldersView") ? (
        // Display these images if the user has the "HoldersView" scope
        <div>
          <img style={{ height: 100, width: 100 }} src={imageSrcOne} alt="One" />
          <img style={{ height: 100, width: 100 }} src={imageSrcTwo} alt="Two" />
        </div>
      ) : (
        // Display this image if the user does not have the "HoldersView" scope
        <img style={{ height: 100, width: 100 }} src={imageSrcOne} alt="One" />
      )}
    </div>
  );
};

export default Main;