
import SearchImage from './components/SearchImage';
import Divider from './components/Divider';
import './styles/main.scss';

function App() {
  
  const getInputSearch = (inputSearch)=>{
    console.log(`the input search is:${inputSearch}`);
  }
  return (
    <div className="App">
      
      <header className="main_header container">
        <h1 className='main_heading'>GifExpertApp</h1>
      </header>

      <SearchImage GetInputSearch = {getInputSearch}/>
      <Divider/>
     
     
      
    </div>
  );
}

export default App;
