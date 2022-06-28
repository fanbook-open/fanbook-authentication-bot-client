import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import config from "./config"

function App() {
  const [message, setMessage] = useState('');
  

  useEffect(() => {
    // http://10.100.1.19:9999/fanbook/redirect
    // http://10.100.1.19:9999/fanbook/login
    window.fb
      .oAuth({ oAuthUrl: config.baseApi + "/fanbook/redirect" })
      .then(function (res) {
        
        if (res.data && res.data.code) {
          axios
            .get(config.baseApi + "/fanbook/login", {
              params: {
                code: res.data.code,
                guild: window.guild
              },
            })
            .then(function (response) {
              console.log(JSON.stringify(response));
              if (response && response.status === 200 ) {
                if (response.data.code === 0) {
                  setMessage(`${response.data.data.username}, 恭喜您认证成功`);
                } else {
                  setMessage(`sorry, 无法查询到您的信息，请联系客服`);
                }
              } else {
                                
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          alert(res["errMsg"]);
        }
      });
  },[] );

  return <div className="App">{message}</div>;
}

export default App;
