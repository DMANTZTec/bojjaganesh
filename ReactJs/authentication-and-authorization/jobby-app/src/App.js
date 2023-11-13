import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import JobsRoute from './components/JobsRoute'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import JobItemDetails from './components/JobItemDetails'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginRoute} />
      <ProtectedRoute exact path="/" component={HomeRoute} />
      <ProtectedRoute exact path="/jobs" component={JobsRoute} />
      <Route
        exact
        path="/jobs/bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"
        component={JobItemDetails}
      />
    </Switch>
  </>
)

export default App
