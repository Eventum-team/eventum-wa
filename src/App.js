import React from "react";
import Routes from "./routes/routes";
import store from "./data/redux/store";
import { Provider } from 'react-redux'



const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

// return (
//   <StoreProvider>
//     <BreadCrumbContextProvider>
//       <Routes />
//     </BreadCrumbContextProvider>
//   </StoreProvider>
// );
