import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'
import Main from './pages/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Main} exact />
      </Router>
    </div>
    //
  )
}

export default App
