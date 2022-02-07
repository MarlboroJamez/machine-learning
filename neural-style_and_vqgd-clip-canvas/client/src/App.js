import './styles/App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <Router>  
      <div className="overflow-x-hidden font-mono App h-screen w-screen bg-zinc-900">
        <Switch>
          {/* PUBLIC */}
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
