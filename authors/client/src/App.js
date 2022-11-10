import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Add from './views/Add';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Add/>} path="/authors/add"/>
        <Route element={<Update/>} path="/authors/update/:id"/>
      </Routes>
    </div>
  );
}

export default App;
