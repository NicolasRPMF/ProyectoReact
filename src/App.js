
import React from 'react';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer message="¡Hola desde ItemListContainer!" />
    </div>
  );
}

export default App;
  


