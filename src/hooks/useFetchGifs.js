
import{useState,useEffect} from 'react';
import {fetchImages} from '../API/index';

const useFetchGifs = (searchText) => {
 
  const [state,setState] = useState({
      listImages:[],
      loading:true
  }) 

  useEffect(()=>{
     
    const getImages = async () =>{
      const imageResult = await fetchImages(searchText);
      
      if(imageResult.success){
        setState({
            listImages:[imageResult.responseData,...state.listImages],
            loading:false
        })
      }
      else{
        console.log(imageResult.data)
      }
    }

    if(searchText){
      getImages();
    }
     
  },[searchText])

  return state;
};

export default useFetchGifs;
