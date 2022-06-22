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
  })

  const handleMaoriProverbClick = () => {
    getMaoriProverb()
    .then(obj => setMaoriProverb(obj))
  }

  return (
  <div> 
    <h1>{welcomeStatement}</h1>
    <button onClick={handleMaoriProverbClick}>Get a proverb in Maori!</button>
    {MaoriProverb && <p>Source: {MaoriProverb.source} More text here</p>}
    {MaoriProverb && <p>Translation: {MaoriProverb.translation} More text here</p>}

  </div>
  
 
  )
}

export default App


