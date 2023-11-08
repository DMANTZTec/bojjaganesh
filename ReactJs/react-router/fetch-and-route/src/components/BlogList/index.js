import Loader from '../Loader'
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const blogsResponse = await fetch('https://apis.ccbp.in/blogs')
    const blogsData = await blogsResponse.json()
    const updatedBlogsData = blogsData.map(item => ({
      id: item.id,
      title: item.title,
      imageUrl: item.image_url,
      avatarUrl: item.avatar_url,
      author: item.author,
      topic: item.topic,
    }))
    this.setState({blogsList: updatedBlogsData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div className="blog-items-container">
        {isLoading ? (
          <Loader/>
        ) : (
          blogsList.map(item => <BlogItem blogItemData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
