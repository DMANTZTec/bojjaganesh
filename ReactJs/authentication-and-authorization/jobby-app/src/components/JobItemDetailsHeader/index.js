import {MdWork, MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobItemDetailsHeader = props => {
  const {
    companyLogoUrl,
    title,
    rating,
    location,
    packagePerAnnum,
    employmentType,
  } = props
  return (
    <div className="job-item-details-header">
      <div className="job-item-details-title-details">
        <img
          src={companyLogoUrl}
          alt="facebook"
          className="job-item-company-logo"
        />
        <div className="job-item-details-title-star-rating">
          <p className="job-item-details-title">{title}</p>
          <div className="job-item-star-and-rating">
            <AiFillStar className="job-item-details-star-icon" />
            <span className="job-item-details-rating">{rating}</span>
          </div>
        </div>
      </div>
      <div className="job-item-details-location-package-container">
        <div className="job-item-details-location-internship">
          <MdLocationOn className="job-item-details-location-icon" />
          <p className="job-item-details-location">{location}</p>
          <MdWork className="job-item-details-job-icon" />
          <p className="job-item-details-employment-type">{employmentType}</p>
        </div>
        <p className="job-item-details-salary">{packagePerAnnum}</p>
      </div>
    </div>
  )
}

export default JobItemDetailsHeader
