// import fs from 'fs'
import { parseArrayBuffer } from 'midi-json-parser';

import { useState } from "react"

// const buf = fs.readFileSync('./MIDI.mid').buffer



// // Let's assume there is an ArrayBuffer called arrayBuffer which contains the binary content of a
// // MIDI file.

// parseArrayBuffer(buf).then((json) => {
//   // json is the JSON representation of the MIDI file.
//   console.log(json)
// });
export const Midi = () => {
  const [json, setJson] = useState({})
  return <div style={{overflow: 'auto'}}>
    <input type="file" onChange={(event) => {
      const reader = new FileReader()
      reader.addEventListener('load', ({ target }) => parseArrayBuffer(target!.result as ArrayBuffer).then(setJson))
      if (event.target?.files?.[0]) {
        reader.readAsArrayBuffer(event.target?.files?.[0])
      }
    }}/>
    <div>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  </div>
}

