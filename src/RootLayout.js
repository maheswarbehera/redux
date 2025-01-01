import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

const RootLayout = () => {
  return (
   <>
   <Provider store={store}>
    <div>
      RootLayout
    </div>
    <main>
      <Outlet /> 
    </main>
   </Provider>
   </>
  );
};

export default RootLayout;
