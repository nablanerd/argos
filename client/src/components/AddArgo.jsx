import React, { useEffect, useState } from "react";

function AddArgo(props) {

  function handleSubmit(event)
  {

    event.preventDefault();

    props.handleSubmit(name)
    setName("")


    
  }

  const [name, setName] = useState('');

    return (
        <>
    <h2>Ajouter un(e) Argonaute</h2>
  <form className="new-member-form">
    <label htmlFor="name">Nom de l&apos;Argonaute</label>
    <input id="name" name="name" type="text" placeholder="Charalampos" value={name} onChange={event=> setName(event.target.value)} />
    <button onClick={handleSubmit} type="submit">Envoyer</button>
  </form>
  

        </>
    );
}

export default AddArgo;