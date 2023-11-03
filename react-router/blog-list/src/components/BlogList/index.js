import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list-container">
      {blogsList.map(item => (
        <BlogItem key={item.id} blogItemDetails={item} />
      ))}
    </ul>
  )
}

export default BlogList
