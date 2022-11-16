import React, { useEffect, useState } from "react";

import './App.css';

import ArgoHeader from './components/ArgoHeader';
import AddArgo from'./components/AddArgo'
import ArgoList from './components/ArgoList'

import axios from "axios";

const urlApi = "http://localhost:8080"

function App() {

  const [argos, setArgos] = useState([]);

  const getArgos = async () => {
    const {data}  = await axios.get(`${urlApi}/api/argos`);
    setArgos(data);

  };  
  
  useEffect(() => {
    getArgos();
  }, []);

async function addArgo(name)
{
  const {data} = await axios.post('${urlApi}/api/argos', {
    name: name,
  })

  setArgos(prevState =>[...prevState, data] )

}
  return (
  <div className="App">

  <ArgoHeader />

  <main>

    <AddArgo handleSubmit={addArgo}/>

    <ArgoList argos={argos} />

  </main>


  </div>
  );
}

export default App;
