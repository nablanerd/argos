import React from 'react';

import ArgoItem from './ArgoItem'

function ArgoList({argos}) {

    return (
        <>
            
            <h2>Membres de l'équipage</h2>
  <section className="member-list">

  <div className="box">
{

argos.map(({id, name}) => <ArgoItem key={id} name={name}/>)

}
</div>
  </section>

        </>
    );
}

export default ArgoList;