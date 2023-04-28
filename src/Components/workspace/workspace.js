import React, { useState } from 'react'
import './workspace.css'
import Form from '../Form/Form';
// import Random from '../random';

const Workspace = () => {

  const [visibility, setVisibility] = useState(false);

  const counter = () => {
    setVisibility(!visibility);
  };
  return (
    <>
      <div className='workspace'>
        <div>
          PopUp Form
        </div>
        <div>
          <button onClick={counter}>Show/Hide</button>
          {
            visibility ? (
              <Form/>
            ) :
              (<> </>)
          }
        </div>
      </div>
    </>



  )
}

export default Workspace