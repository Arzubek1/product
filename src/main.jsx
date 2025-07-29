import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { proStore } from './redux/index.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={proStore}>
    <App />
  </Provider>,
)
