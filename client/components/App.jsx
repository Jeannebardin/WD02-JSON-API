import React, { useState, useEffect } from 'react'

import {getMaoriProverb} from '../api/proverbApi'

function App() {
  const [MaoriProverb, setMaoriProverb] = useState(null)

  useEffect(() => {
    getMaoriProverb()
      .then((res) => {
        setMaoriProverb(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  },
  [])

  const handleMaoriProverbClick = () => {
    getMaoriProverb()
    .then(obj => setMaoriProverb(obj))
    .catch(error => console.log(error))
  }

  return (
  <div> 
    <h1>This is Jeanne's first API</h1>
    <button onClick={handleMaoriProverbClick}>Get a proverb in Maori!</button>
    {MaoriProverb && <p>Source: {MaoriProverb.source} This is the original Maori</p>}
    {MaoriProverb && <p>Translation: {MaoriProverb.translation} </p>}

  </div>
  
 
  )
}

export default App


