import React from "react";
import Routes from "./routes/routes";
import StoreProvider from "./data/redux/store";

const App = () => {
  return <Routes />;
};

export default App;

// return (
//   <StoreProvider>
//     <BreadCrumbContextProvider>
//       <Routes />
//     </BreadCrumbContextProvider>
//   </StoreProvider>
// );
