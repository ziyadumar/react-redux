import './App.css';
import PostListPage from './Pages/Post-List/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import { useAppDispatcher, useAppSelector } from './Store/hooks';
import Homepage from './Pages/Home/Home';
import UserListPage from './Pages/User-List/UserListpage';
import CatsPage from './Pages/Cats/CatsPage';

function App() {
  // const counter = useAppSelector(state => state.counter);
  // const dispatch = useAppDispatcher();
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/cats' component={CatsPage} />
          <Route path='/posts' component={PostListPage} />
          <Route path='/users' component={UserListPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
