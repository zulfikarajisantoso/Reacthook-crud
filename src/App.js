
import { Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './pages/Add';
import Edit from './pages/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container"> 
      <BrowserRouter>
        <Fragment>
          <Link to="/about" className="btn btn-sm btn-primary my-4 " style={{
          }}>Add Data</Link>
        </Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/edit/:id" exact component={Edit} />
          
     
      </BrowserRouter>
    </div>
  );
}

export default App;
