import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn, MdWork} from 'react-icons/md'
import './index.css'

const JobItem = props => {
  const {jobItemData} = props
  const {
    title,
    companyLogoUrl,
    rating,
    jobDescription,
    employmentType,
    location,
    packagePerAnnum,
  } = jobItemData
  return (
    <li className="job-item-container">
      <div className="job-item-title-details">
        <img src={companyLogoUrl} alt="facebook" className="job-item-image" />
        <div className="job-item-title-star-rating">
          <p className="job-item-title">{title}</p>
          <div className="star-and-rating">
            <AiFillStar className="job-item-star-icon" />
            <span className="job-item-rating">{rating}</span>
          </div>
        </div>
      </div>
      <div className="job-item-location-package-container">
        <div className="job-item-location-internship">
          <MdLocationOn className="job-item-location-icon" />
          <p className="job-item-location">{location}</p>
          <MdWork className="job-item-job-icon" />
          <p className="job-item-employment-type">{employmentType}</p>
        </div>
        <p className="job-item-salary">{packagePerAnnum}</p>
      </div>
      <hr />
      <p className="job-item-description-title">Description</p>
      <p className="job-item-description">{jobDescription}</p>
    </li>
  )
}

export default JobItem
