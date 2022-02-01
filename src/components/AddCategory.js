
import CardImage from './CardImage'
import PropTypes from 'prop-types'
import '../styles/category.scss'

const AddCategory = ({ categoryTitle, categoryItems }) => {
  return (
    <div className='category_container'>
       <h2 className='category_title'>{categoryTitle}</h2>
      <div className='container'>
        {categoryItems.map(category => {
          return (
            <CardImage
              key={category.id}
              title={category.title}
              imageUrl={category.images.downsized_large.url}
            />
          )
        })}
      </div>
    </div>
  )
}

AddCategory.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  categoryItems: PropTypes.array.isRequired
}

export default AddCategory
