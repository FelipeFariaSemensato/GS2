import React from 'react';
import './style.css'

const LogoutModal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Você deseja sair da sua conta?</h2>
        <a href='/'><button className="btn">SIM</button></a>
        <a href='/'><button className="btn">NÃO</button></a>
      </div>
    </div>
  );
};

export default LogoutModal;