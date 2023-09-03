import React from 'react';
import './HeaderComponent.css';
import { Link } from 'react-router-dom';


const HeaderComponent = () => (
  <header className="App-header">
    <ul className='horizontal_list'>
      <li><Link to="/">Сервис заполнения анкет Юр-лиц</Link></li>
      <li><Link to="/organizations-list">Список организаций</Link></li>
    </ul>
  </header>
);

export default HeaderComponent;
