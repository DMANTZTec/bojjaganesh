import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const HomeRoute = () => (
  <div>
    <Header />
    <div className="home-container">
      <h1 className="home-head">Find The Job That Fits Your Life</h1>
      <p className="home-description">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs" className="find-jobs-btn-link">
        <button type="button" className="find-jobs-btn">
          Find Jobs
        </button>
      </Link>
    </div>
  </div>
)

export default HomeRoute