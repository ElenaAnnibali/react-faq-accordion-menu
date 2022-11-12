import './index.css';
/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: rgb(175, 103, 233);
          background: linear-gradient(
            180deg,
            rgba(175, 103, 233, 1) 30%,
            rgba(101, 101, 231, 1) 60%
          );
          font-family: 'KumbhSans-Regular', Georgia, serif;
          font-size: 12px;
          color: #4a4b5e;
        }

        h1 {
          font-family: 'KumbhSans-Bold', Georgia, serif;
          color: #1d1e35;
        }

        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
