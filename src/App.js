import './App.css';
import FindById from './Componet/FindById';
import DeleteById from './Componet/DeleteById';
import SavePerson from './Componet/SavePerson';
import FetchAll from './Componet/FetchAll';
//import SavePerson from './Componet/SavePerson';

function App() {
  return (
    <div className="App">
      <div>
      <h1>User Managemnet System</h1>
      <FindById />
      <FetchAll />
      <DeleteById />
      <SavePerson />
    </div>
      
    </div>
  );
}

export default App;
