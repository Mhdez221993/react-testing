import './App.css'

import { AppProviders } from './providers/app-providers'
import Users from './components/users/Users'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Users />
      </div>
    </AppProviders>
  )
}

export default App
