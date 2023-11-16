import {AiFillStar} from 'react-icons/ai'
import {MdWork, MdLocationOn} from 'react-icons/md'
import './index.css'

const SimilarJobsItem = props => {
  const {similarJobsData} = props
  const {
    companyLogoUrl,
    title,
    rating,
    jobDescription,
    location,
    employmentType,
  } = similarJobsData
  return (
    <li className="similar-job-item">
      <div className="similar-job-title-details">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
          className="similar-job-company-logo"
        />
        <div className="similar-job-title-star-rating">
          <h1 className="similar-job-title">{title}</h1>
          <div className="similar-job-star-and-rating">
            <AiFillStar className="similar-job-star-icon" />
            <p className="similar-job-rating">{rating}</p>
          </div>
        </div>
      </div>
      <h1 className="similar-job-description-title">Description</h1>
      <p className="similar-job-description">{jobDescription}</p>
      <div className="similar-job-location-internship">
        <MdLocationOn className="similar-job-location-icon" />
        <p className="similar-job-location">{location}</p>
        <MdWork className="similar-job-job-icon" />
        <p className="similar-job-employment-type">{employmentType}</p>
      </div>
    </li>
  )
}

export default SimilarJobsItem