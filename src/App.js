import './App.css';
import Header from './Components/Header/Header';
import Catalog from './Components/Catalog/Catalog';
import data from './catalogData';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Catalog data={data.products} />
    </div>
  );
}

export default App;
