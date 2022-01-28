
import { API_KEY } from "./SecretKeys"

export const fetchImages = async (searchText) => {
  
    try{
       const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchText}&limit=10&offset=0&rating=g&lang=en`);
       const result = await response.json();
      
       
       return{
           success:true,
           data:result.data
       }
     
    }
    catch(err){
      return{
          error:true,
          data:err
      }
    }
}