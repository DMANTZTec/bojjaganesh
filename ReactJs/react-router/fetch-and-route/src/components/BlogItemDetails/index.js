import Loader from '../Loader'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogSpecificDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogSpecificData()
  }

  getBlogSpecificData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const blogSpecificResponse = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogSpecificData = await blogSpecificResponse.json()
    const updatedData = {
      id: blogSpecificData.id,
      title: blogSpecificData.title,
      imageUrl: blogSpecificData.image_url,
      avatarUrl: blogSpecificData.avatar_url,
      author: blogSpecificData.author,
      content: blogSpecificData.content,
      topic: blogSpecificData.topic,
    }
    this.setState({blogSpecificDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogSpecificDetails, isLoading} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogSpecificDetails
    return (
      <>
        {isLoading ? (
          <Loader/>
        ) : (
          <div className="blog-specific-details">
            <h1 className="blog-title">{title}</h1>
            <div className="blog-avatar-container">
              <img src={avatarUrl} className="avatar-image" alt="avatar" />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} className="blog-specific-image" alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
