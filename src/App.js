
import {useState} from 'react';
import SearchImage from './components/SearchImage';
import Divider from './components/Divider';
import AddCategory from './components/AddCategory';
import useFetchGifs from './hooks/useFetchGifs';
import './styles/main.scss';

function App() {
  
  const [searchText,setSearchText] = useState("");
  const {listImages} = useFetchGifs(searchText);
  
  const getInputSearch = (inputSearch)=>{
    setSearchText(inputSearch);
  }

 
  return (
    <>
     
      <header className="main_header container">
        <h1 className='main_heading'>GifExpertApp</h1>
      </header>

      <SearchImage GetInputSearch = {getInputSearch}/>
      <Divider/>
       
        {/* {[...listImages].reverse().map((categoryList,index)=>{
         return <AddCategory key={index} categoryTitle = {categoryList.titleCategory} categoryItems = {categoryList.data} />
      })} 
         */}
         {listImages.map((categoryList,index)=>{
         return <AddCategory key={index} categoryTitle = {categoryList.titleCategory} categoryItems = {categoryList.data} />
      })}  
        
      
    </>
  );
}

export default App;
