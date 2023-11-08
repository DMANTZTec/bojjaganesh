import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {title, description, publishedDate} = blogItemDetails
  return (
    <li>
      <div className='blog-item'>
        <div className='blog-item-head-container'>
          <h1 className="blog-item-title">{title}</h1>
          <p className="date-of-blog">{publishedDate}</p>
        </div>
        <p className="blog-item-description">{description}</p>
      </div>
    </li>
  )
}

export default BlogItem
