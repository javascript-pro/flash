// /Users/goldlabel/GitHub/flash/app/src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {Flash, UbereduxProvider, System} from './Flash';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UbereduxProvider>
      <System>
        <Flash
          config={{
            width: 750, // "100%",
            height: 550, // "100%",
          }}
        />
      </System>
    </UbereduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
