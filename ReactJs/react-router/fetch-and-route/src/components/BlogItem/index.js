import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemData
  return (
    <Link style={{paddingLeft: 13, textDecoration: 'none'}} to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img src={imageUrl} className="blog-image" alt={title} />
        <div className="blog-content">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} className="avatar" alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
