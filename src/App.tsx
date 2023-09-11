import { ThemeProvider } from 'styled-components'
import theme from './assets/styles/themes'
import GlobalStyle from './assets/styles/global'
import Router from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
