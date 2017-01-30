import { HashRouter, Match, Link } from 'react-router'
import Home from 'components/home'
import Contacts from 'components/contacts'
import About from 'components/about'

let App = (props) => {
  return (
    <HashRouter>
      <div>
        <h2 className="title">React/Router Starter</h2>
          <div className="links">
          [ 
            <IndexLink to="/" activeClassName="active-link">Home</IndexLink> | 
            <Link to="contacts" activeClassName="active-link">Contacts</Link> | 
            <Link to="about" activeClassName="active-link">About</Link> 
          ]
          </div>
          <div className="clear"></div>
      </div>
      
      <hr/>
      
      <div>
        <Match exactly pattern='/' component={Home} />
        <Match pattern='/contacts' component={Contacts} />
        <Match pattern='/about' component={About} />
      </div>
    </HashRouter>
  )
}

export default App
