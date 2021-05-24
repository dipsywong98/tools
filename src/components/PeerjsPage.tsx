import { useState } from 'react'
import Peer from 'peerjs'
import { Container } from '@material-ui/core'

function PeerjsPage() {
  const [optionsString, setOptionsString] = useState(() => JSON.stringify({
    host: '0.peerjs.com',
    port: 443,
    path: '/',
    secure: true,
    config: { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }], sdpSemantics: 'unified-plan' }
  }, null, 2))

  const [peer, setPeer] = useState<Peer|null>(null)
  const [peerId, setPeerId] = useState('')
  const [connectId, setConnectId] = useState('')
  const [received, setReceived] = useState<string[]>([])
  const [connected, setConnected] = useState(false)
  const [conn, setConn] = useState<Peer.DataConnection|null>(null)
  const [text, setText] = useState('')

  const newPeer = () => {
    if(peer && !peer.destroyed) {
      peer.destroy()
    }
    const peer1 = new Peer(JSON.parse(optionsString))
    setPeer(peer1)
    peer1.on('open', () => {
      setPeerId(peer1.id)
    })
    peer1.on('error',console.error)
    peer1.on('connection', conn => {
      setConn(conn)
      conn.on('open', () => setConnected(true))
      conn.on('data', d => setReceived([...received, d]))
      conn.on('close', () => setConnected(false))
      conn.on('error',console.error)
    })
  }

  const connect = () => {
    if(peer) {
      const conn = peer.connect(connectId)
      conn.on('open', () => setConnected(true))
      conn.on('data', d => setReceived([...received, d]))
      conn.on('close', () => setConnected(false))
      conn.on('error',console.error)
      setConn(conn)
    }
  }

  const send = () => {
    if(peer && conn && connected) {
      conn.send(text)
      setText('')
    }
  }

  return (
    <Container>
      <h1>PeerJS Playground</h1>
      <label>
        <div>Option JSON</div>
        <textarea rows={20} cols={100} value={optionsString} onChange={({ target }) => setOptionsString(target.value)}/>
      </label>
      <div>
        <button onClick={newPeer}>new Peer()</button>
        current peerId {peerId}
      </div>
      <div>
        <input value={connectId} onChange={({target}) => setConnectId(target.value)}/> <button onClick={connect}>connect</button>
      </div>
      <div>connected: {connected ? 'true' : 'false'}</div>
      <div><input value={text} onChange={({target}) => setText(target.value)}/><button onClick={send}>send</button></div>
      <div>
        {received.reverse().map((s, k) => <div key={k}>{s}</div>)}
      </div>
    </Container>
  )
}

export default PeerjsPage
