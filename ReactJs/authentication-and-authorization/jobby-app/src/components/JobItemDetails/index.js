import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import JobItemDetailsHeader from '../JobItemDetailsHeader'
import Header from '../Header'
import Loader from '../Loader'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobItemDetails extends Component {
  state = {jobItemDetails: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getJobItemDetails()
  }

  getJobItemDetails = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const url = 'https://apis.ccbp.in/jobs/bb95e51b-b1b2-4d97-bee4-1d5ec2b96751'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const jobDetails = {
        id: data.job_details.id,
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        jobDescription: data.job_details.job_description,
        skills: data.job_details.skills,
        lifeAtCompany: data.job_details.life_at_company,
        location: data.job_details.location,
        packagePerAnnum: data.job_details.package_per_annum,
        rating: data.job_details.rating,
        similarJobs: data.job_details.similar_jobs,
        title: data.job_details.title,
      }
      this.setState({
        jobItemDetails: jobDetails,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderHeader = () => {
    const {jobItemDetails} = this.state
    const {
      companyLogoUrl,
      title,
      rating,
      location,
      employmentType,
      packagePerAnnum,
    } = jobItemDetails
    return (
      <JobItemDetailsHeader
        companyLogoUrl={companyLogoUrl}
        rating={rating}
        location={location}
        employmentType={employmentType}
        title={title}
        packagePerAnnum={packagePerAnnum}
      />
    )
  }

  renderLoadingView = () => <Loader />

  renderLifeAtCompany = () => {
    const {jobItemDetails} = this.state
    const {lifeAtCompany} = jobItemDetails
    console.log(lifeAtCompany)
    return null
  }

  renderSkills = () => {
    const {jobItemDetails} = this.state
    const {skills} = jobItemDetails
    const skillsFormatted = skills.map(item => ({
      imageUrl: item.image_url,
      name: item.name,
    }))
    return (
      <div className="skills-container">
        <h1 className="skills-head">Skills</h1>
        <ul className="skill-items">
          {skillsFormatted.map(item => (
            <li className="skill-item" key={item.imageUrl}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="skill-image"
              />
              <p className="skill-name">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  jobItemDetailsSuccessView = () => {
    const {jobItemDetails} = this.state
    const {jobDescription} = jobItemDetails
    return (
      <>
        <Header />
        <div className="job-item-details-container">
          <div className="job-item-details-card">
            {this.renderHeader()}
            <hr />
            <p className="job-item-details-description-title">Description</p>
            <p className="job-item-details-description">{jobDescription}</p>
            {this.renderSkills()}
            {this.renderLifeAtCompany()}
          </div>
        </div>
      </>
    )
  }

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.loading:
        return this.renderLoadingView()
      case apiConstants.success:
        return this.jobItemDetailsSuccessView()
      case apiConstants.failure:
        return this.jobItemDetailsFailureView()
      default:
        return null
    }
  }
}

export default JobItemDetails
