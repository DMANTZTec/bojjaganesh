import Header from '../Header'
import './index.css'

const Home = () =>(
    <>
      <Header />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content">
            <h1 className="home-head">Clothes That Get You Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-image-mobile"
            />
            <p className="home-description">
              Fashion is part of the daily air and it does not quite help that it
              changes all the time. Clothes have always been a marker of the era
              and we are in a revolution. Your fashion makes you been seen and
              heard that way you are. So, celebrate the season new and exciting
              fashion in your own way.
            </p>
            <button className="shop-now-btn" type="button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-image-desktop"
          />
        </div>
      </div>
    </>
  )

export default Home
