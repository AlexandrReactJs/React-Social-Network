import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import { store } from './RTK/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";



const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(

    <Provider store={store}>
      <BrowserRouter>
        <App authUserId={store.getState().auth.userId} />
      </BrowserRouter>
    </Provider>
  )
}



reportWebVitals();
