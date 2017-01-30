import 'index.css'
import { render } from 'react-dom'
import App from 'containers/app'

document.addEventListener('DOMContentLoaded', (evt) => {
  'use strict'
  console.log('React/Router Starter Project')
  render(<App />, document.querySelector('#app'))
})
