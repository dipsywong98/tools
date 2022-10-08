import React, { FunctionComponent, useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery
} from '@material-ui/core'
import { Brightness7 } from '@material-ui/icons'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import PeerjsPage from './PeerjsPage'
import NginxSslPage from './NginxSslPage'
import HomePage from './HomePage'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const lightTheme = createMuiTheme({
  palette: {
    type: 'light'
  }
})

const App: FunctionComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(useMediaQuery('(prefers-color-scheme: dark)'))
  return (
    <HashRouter>
      <MuiThemeProvider theme={{ ...(isDarkMode ? darkTheme : lightTheme) }}>
        <CssBaseline/>
        <Box flexDirection="column"
             style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex' }}>
          <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">
                Dipsy's Toolbox
              </Typography>
              <ButtonGroup variant="text" color="inherit">
                <Link to="/" component={Button}>
                  Home
                </Link>
                <Link to="/peerjs" component={Button}>
                  Peerjs
                </Link>
                <Link to="Nginx-SSL" component={Button}>
                  Nginx SSL
                </Link>
                <Button style={{display: 'none'}} onClick={() => {
                  fetch('https://i.imgur.com/pUTZplB.jpg')
                  .then(res => res.blob())
                  .then(blob => {
                    const file = new File([blob], 'dot.png', blob)
                    navigator.share({
                      // title: 'MDN',
                      // text: 'Learn web development on MDN!',
                      files: [file,file,file,file,file,file,]
                    })
                  })
                }}>
                  test ig
                </Button>
                <Button title="Light/Dark Mode" onClick={() => setIsDarkMode(!isDarkMode)}>
                  <Brightness7/>
                </Button>
              </ButtonGroup>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route path="/peerjs">
              <PeerjsPage/>
            </Route>
            <Route path="/Nginx-SSL">
              <NginxSslPage/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </Box>
      </MuiThemeProvider>
    </HashRouter>
  )
}

export default App
