import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from 'containers/app'
import Home from 'components/home'
import Contacts from 'components/contacts'
import About from 'components/about'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/about' component={About} />
    </Route>
  </Router>
)

export default routes
