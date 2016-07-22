import { IndexLink, Link } from 'react-router'

let App = (props) => {
  return (
    <div>
      <div>
        <h2 className="brand-title">React/Router Starter</h2>
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
        {props.children}
      </div>
    </div>
  )
}

export default App
