
import PropTypes from 'prop-types';
const CardImage = ({title,imageUrl}) => {
  return(
       <div className='card_image animate__animated animate__fadeIn'>
        <img src={imageUrl} alt="gif"/>
        <h3 className="title">{title}</h3>
      </div>
  
  )
};

CardImage.propTypes = {
 title:PropTypes.string.isRequired,
  imageUrl:PropTypes.string.isRequired,

}

export default CardImage;
