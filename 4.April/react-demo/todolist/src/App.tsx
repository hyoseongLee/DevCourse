import React from 'react';
import './App.css';
import Todolist from './Todolist';
import MyWeather from './Myweather';

function App() {

  return (
    <div className="container">
<Todolist></Todolist>
<MyWeather weather='맑음'>일기예보</MyWeather>
     </div>
  );

}

export default App;
