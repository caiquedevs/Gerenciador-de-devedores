import React from 'react';

import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import DashboardPage from './pages/DashboardPage';
import GlobalStyle from './styles';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer
        transition={Flip}
        position="top-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toast-container"
      />

      <DashboardPage />
    </Provider>
  );
}

export default App;
