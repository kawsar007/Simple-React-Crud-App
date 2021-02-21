import './App.css';
import Home from './components/Home';
import Header from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from './provider/UserProvider';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header/>
      <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/add" component={AddUser}/>
         <Route path="/edit/:id" component={EditUser}/>
      </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
