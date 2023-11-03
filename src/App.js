import React from 'react'; // Import React
import './App.css';
import Navbar from './Componets/Navbar';
import TextForm from './Componets/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" linktext="Link"></Navbar>
      <TextForm></TextForm>
      
    </>
  );
}

export default App;
