import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact'
import Navbar from './components/elements/Navbar';
import './styles/App.scss'
import { provider, Provider } from 'react-redux'
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Routes>
                <Route exact path="/" element={<Contacts />}></Route>
                <Route exact path="/add" element={<AddContact/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
