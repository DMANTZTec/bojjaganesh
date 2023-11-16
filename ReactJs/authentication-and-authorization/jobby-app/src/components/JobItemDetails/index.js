import {Component} from 'react'
import {TiArrowForward} from 'react-icons/ti'
import Cookies from 'js-cookie'
import './index.css'
import JobItemDetailsHeader from '../JobItemDetailsHeader'
import Header from '../Header'
import Loader from '../Loader'
import SimilarJobsItem from '../SimilarJobsItem'
import JobFail from '../JobFail/index'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class JobItemDetails extends Component {
  state = {jobItemDetails: [], apiStatus: apiConstants.initial, similarJobs: []}

  componentDidMount() {
    this.getJobItemDetails()
  }

  getJobItemDetails = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/jobs/${id}`
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
        title: data.job_details.title,
      }
      const similarJobs = data.similar_jobs.map(item => ({
        companyLogoUrl: item.company_logo_url,
        employmentType: item.employment_type,
        id: item.id,
        jobDescription: item.job_description,
        title: item.title,
        location: item.location,
        rating: item.rating,
      }))

      this.setState({
        jobItemDetails: jobDetails,
        apiStatus: apiConstants.success,
        similarJobs,
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

  renderLoadingView = () => (
    <div className="loading-view">
      <Loader />
    </div>
  )

  jobItemDetailsFailureView = () => (
    <JobFail getJobItemDetails={this.getJobItemDetails} />
  )

  renderLifeAtCompany = () => {
    const {jobItemDetails} = this.state
    const {lifeAtCompany} = jobItemDetails
    const lifeAtCompanyFormatted = {
      description: lifeAtCompany.description,
      imageUrl: lifeAtCompany.image_url,
    }
    const {description, imageUrl} = lifeAtCompanyFormatted
    return (
      <div className="life-at-company-container">
        <h1 className="life-at-company-head">Life at company</h1>
        <div className="life-at-company-card">
          <p className="life-at-company-description">{description}</p>
          <img
            src={imageUrl}
            className="life-at-company-image"
            alt="life at company"
          />
        </div>
      </div>
    )
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
            <li className="skill-item" key={item.name}>
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

  renderSimilarJobs = () => {
    const {similarJobs} = this.state
    return (
      <ul className="similar-jobs-container">
        {similarJobs.map(item => (
          <SimilarJobsItem similarJobsData={item} key={item.id} />
        ))}
      </ul>
    )
  }

  jobItemDetailsSuccessView = () => {
    const {jobItemDetails} = this.state
    const {jobDescription, companyWebsiteUrl} = jobItemDetails
    return (
      <>
        <div className="job-item-details-card">
          {this.renderHeader()}
          <hr />
          <div className="job-item-details-description-title-container">
            <h1 className="job-item-details-description-title">Description</h1>
            <button type="button" className="visit-btn">
              <a
                href={companyWebsiteUrl}
                className="visit-text"
                target="_blank"
                rel="noreferrer"
              >
                Visit <TiArrowForward class="visit-arrow" />
              </a>
            </button>
          </div>
          <p className="job-item-details-description">{jobDescription}</p>
          {this.renderSkills()}
          {this.renderLifeAtCompany()}
        </div>
        <h1 className="similar-jobs-head">Similar Jobs</h1>
        {this.renderSimilarJobs()}
      </>
    )
  }

  renderViewBasedOnApiStatus = () => {
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

  render() {
    return (
      <>
        <Header />
        <div className="job-item-details-main-container">
          {this.renderViewBasedOnApiStatus()}
        </div>
      </>
    )
  }
}

export default JobItemDetails