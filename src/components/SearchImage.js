
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import '../styles/search_image.scss';

const SearchImage = ({GetInputSearch}) => {

    const [inputSearch,setInputSearch] = useState("");
  

    const resetInput = () =>{
       setInputSearch("");
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      GetInputSearch(inputSearch)
      resetInput();
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
SearchImage.propTypes = {
   GetInputSearch:PropTypes.func.isRequired
}

export default SearchImage;
