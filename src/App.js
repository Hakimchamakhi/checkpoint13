import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Adresse from './Component/Profile/Adresse';

function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Adresse/>
    </div>
  );
}

export default App;
