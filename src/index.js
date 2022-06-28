import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Vconsole from 'vconsole'

// eslint-disable-next-line no-restricted-globals
if( location.href.indexOf('debug') !==-1 ){
  new Vconsole();
}

window.fb.init({
  success: () => {
    console.log("---------- window.fb.getCurrentGuild ----------");
    window.fb.getCurrentGuild().then(v => {
        console.log("current guild", v.id, v.name);
        window.guild = v.id + ""; 
    });

      // 初始化逻辑
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );
  }

});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
