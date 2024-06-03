import React from "react";
import './style.css';
const Login = () => {
    return (
    <div className="globo">   
    <div className="form-container">    
      <div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="senha">Escolha uma senha:</label>
          <input type="password" id="senha" name="senha" required />
        </div>
        <button type="submit">logar</button>
      </div>
      </div>
      </div> 
    );
  };

  export default Login;  