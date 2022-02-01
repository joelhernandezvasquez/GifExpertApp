
import {useState,useEffect} from 'react';
import SearchImage from './components/SearchImage';
import Divider from './components/Divider';
import {fetchImages} from './API/index';
import AddCategory from './components/AddCategory';
import './styles/main.scss';

function App() {
  
  const [searchText,setSearchText] = useState("");
   const[listImages,setListImages] = useState([])
  
  const getInputSearch = (inputSearch)=>{
    setSearchText(inputSearch);
  }

  useEffect(()=>{
     
    const getImages = async () =>{
      const imageResult = await fetchImages(searchText);
      
      if(imageResult.success){
        setListImages([imageResult.responseData,...listImages]);
      }
      else{
        console.log(imageResult.data)
      }
    }

    if(searchText){
      getImages();
    }
     
  },[searchText])

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
