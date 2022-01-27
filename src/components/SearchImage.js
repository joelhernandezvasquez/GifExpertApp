
import React,{useState} from 'react';
import '../styles/search_image.scss';

const SearchImage = ({GetInputSearch}) => {

    const [inputSearch,setInputSearch] = useState("");
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      GetInputSearch(inputSearch);
    }

    return(
       <div className='container'>
          <form id="search_form" onSubmit={handleSubmit}>
              <input type="text"
               className='input_search'
               value = {inputSearch}
               onChange={(e)=> setInputSearch(e.target.value)}
              />
          </form>
       </div>
       
       )
};

export default SearchImage;
