import './index.css'

const JobFail = props => {
  const {getJobItemDetails} = props

  const retryGetJobItemDetails = () => {
    getJobItemDetails()
  }
  return (
    <div className="job-fail-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="job-fail-image"
      />
      <h1 className="job-fail-head">Oops! Something Went Wrong</h1>
      <p className="job-fail-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        type="button"
        className="retry-btn"
        onClick={retryGetJobItemDetails}
      >
        Retry
      </button>
    </div>
  )
}

export default JobFail