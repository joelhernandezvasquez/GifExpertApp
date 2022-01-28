
import {useState,useEffect} from 'react';
import SearchImage from './components/SearchImage';
import Divider from './components/Divider';
import {fetchImages} from './API/index';
import './styles/main.scss';

function App() {
  
  const [searchText,setSearchText] = useState("");
   const[ListImages,setListImages] = useState([])

  
  const getInputSearch = (inputSearch)=>{
    setSearchText(inputSearch);
  }

  useEffect(()=>{
     
    const getImages = async () =>{
      const imageResult = await fetchImages(searchText);
      
      if(imageResult.success){
        setListImages([...ListImages,imageResult.data]);
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
    <div className="App">
      
      <header className="main_header container">
        <h1 className='main_heading'>GifExpertApp</h1>
      </header>

      <SearchImage GetInputSearch = {getInputSearch}/>
      <Divider/>
      
      {/* {ListImages.map((list)=>{
       
      })} */}
      
    </div>
  );
}

export default App;
