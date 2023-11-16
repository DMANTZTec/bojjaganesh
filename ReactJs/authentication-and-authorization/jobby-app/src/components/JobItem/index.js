import { AiFillStar } from "react-icons/ai";
import { MdLocationOn, MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.css";

const JobItem = (props) => {
  const { jobItemData } = props;
  const {
    id,
    title,
    companyLogoUrl,
    rating,
    jobDescription,
    employmentType,
    location,
    packagePerAnnum,
  } = jobItemData;
  return (
    <li className="job-item-container">
      <Link to={`/jobs/${id}`} className="job-item-link">
        <div className="job-item-title-details">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="job-item-image"
          />
          <div className="job-item-title-star-rating">
            <h1 className="job-item-title">{title}</h1>
            <div className="star-and-rating">
              <AiFillStar className="job-item-star-icon" />
              <p className="job-item-rating">{rating}</p>
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
        <h1 className="job-item-description-title">Description</h1>
        <p className="job-item-description">{jobDescription}</p>
      </Link>
    </li>
  );
};

export default JobItem;
