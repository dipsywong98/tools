import { Container, Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <Container>
      <ul>
        <li>
          <RouterLink to='peerjs' component={Link}>Peer Js testing playground</RouterLink>
        </li>
        <li>
          <RouterLink to='Nginx-SSL' component={Link}>Nginx playground</RouterLink>
        </li>
      </ul>
    </Container>
  )
}

export default HomePage
