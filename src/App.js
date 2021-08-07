import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './layouts/Header';
import AddUser from './components/users/AddUser';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/users/add" component={AddUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
