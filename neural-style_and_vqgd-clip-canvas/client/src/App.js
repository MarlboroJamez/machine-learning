import './styles/App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

//Pages (Public)
import Home from './pages/home';
import Contact from './pages/contact';
import Blog from './pages/blog';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

//Pages (Private)
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>  
      <div className="overflow-x-hidden font-mono App h-screen w-screen bg-zinc-900">
        <Switch>
          {/* PUBLIC */}
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>

          {/* Private */}
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
