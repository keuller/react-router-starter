import 'index.css'
import { render } from 'react-dom'
import routes from 'routes'

document.addEventListener('DOMContentLoaded', (evt) => {
  'use strict'
  console.log('React/Router Starter Project')
  render(routes, document.querySelector('#app'))
})
