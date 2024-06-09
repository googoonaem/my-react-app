import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<Home />}
        />
      </Switch>
    </Router>
  );
}

export default App;
