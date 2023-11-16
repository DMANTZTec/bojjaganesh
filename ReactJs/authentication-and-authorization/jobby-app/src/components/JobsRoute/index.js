import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Header from '../Header'
import JobItem from '../JobItem'
import Loader from '../Loader'
import JobFail from '../JobFail'
import Profile from '../Profile'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  noJobs: 'NO_JOBS',
  gotJobs: 'GOT_JOBS',
  jobFail: 'JOB_FAIL',
}

class JobsRoute extends Component {
  state = {
    jobsList: [],
    employmentType: [],
    minimumPackage: '',
    searchInput: '',
    searchText: '',
    apiStatus: apiConstants.initial,
  }

  componentDidMount = () => {
    this.getJobs()
  }

  getJobs = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {employmentType, minimumPackage, searchText} = this.state
    const employmentTypeString = employmentType.join(',')
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentTypeString}&minimum_package=${minimumPackage}&search=${searchText}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const jobsList = data.jobs.map(eachJob => ({
        id: eachJob.id,
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      this.setState({jobsList})
      if (jobsList.length > 0) {
        this.setState({apiStatus: apiConstants.gotJobs})
      } else {
        this.setState({apiStatus: apiConstants.noJobs})
      }
    } else {
      this.setState({apiStatus: apiConstants.jobFail})
    }
  }

  changeEmploymentType = event => {
    if (event.target.checked === true) {
      this.setState(
        prevState => ({
          employmentType: [...prevState.employmentType, event.target.value],
        }),
        this.getJobs,
      )
    } else {
      this.setState(
        prevState => ({
          employmentType: prevState.employmentType.filter(
            item => item !== event.target.value,
          ),
        }),
        this.getJobs,
      )
    }
  }

  changeSalaryRange = event => {
    this.setState({minimumPackage: event.target.value}, this.getJobs)
  }

  renderProfile = () => <Profile />

  renderEmploymentTypes = () => (
    <div className="employment-types-container">
      <h1 className="job-filter-head">Type of Employment</h1>
      <ul className="job-filter-list">
        {employmentTypesList.map(item => (
          <li className="job-filter-list-item" key={item.employmentTypeId}>
            <input
              type="checkbox"
              value={item.employmentTypeId}
              id={item.employmentTypeId}
              className="job-filter-input"
              onChange={this.changeEmploymentType}
            />
            <label htmlFor={item.employmentTypeId} className="job-filter-label">
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  renderSalaryRanges = () => (
    <div className="salary-ranges-container">
      <h1 className="job-filter-head">Salary Range</h1>
      <ul className="job-filter-list">
        {salaryRangesList.map(item => (
          <li className="job-filter-list-item" key={item.salaryRangeId}>
            <input
              type="radio"
              value={item.salaryRangeId}
              id={item.salaryRangeId}
              className="job-filter-input"
              name="salaryRange"
              onChange={this.changeSalaryRange}
            />
            <label htmlFor={item.salaryRangeId} className="job-filter-label">
              {item.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )

  onSearching = () => {
    const {searchInput} = this.state
    this.setState({searchText: searchInput}, this.getJobs)
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderJobsView = () => {
    const {jobsList} = this.state
    return (
      <ul className="job-items">
        {jobsList.map(item => (
          <JobItem key={item.id} jobItemData={item} />
        ))}
      </ul>
    )
  }

  renderNoJobsView = () => (
    <div className="no-jobs-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="no-jobs-image"
      />
      <h1 className="no-jobs-head">No Jobs Found</h1>
      <p className="no-jobs-caption">
        We could not find any jobs. Try other filters
      </p>
    </div>
  )

  renderJobFailView = () => <JobFail getJobItemDetails={this.getJobs} />

  renderLoadingView = () => <Loader />

  renderViewBasedOnApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.loading:
        return this.renderLoadingView()
      case apiConstants.gotJobs:
        return this.renderJobsView()
      case apiConstants.noJobs:
        return this.renderNoJobsView()
      case apiConstants.jobFail:
        return this.renderJobFailView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <Header />
        <div className="jobs-page-container">
          <div className="jobs-profile-and-filter">
            {this.renderProfile()}
            <hr />
            {this.renderEmploymentTypes()}
            <hr />
            {this.renderSalaryRanges()}
          </div>
          <div className="job-items-container">
            <div className="jobs-search-element-container">
              <input
                type="search"
                className="jobs-search-element"
                placeholder="Search"
                onChange={this.changeSearchInput}
                value={searchInput}
              />
              <button
                type="button"
                className="search-logo-container"
                data-testid="searchButton"
                aria-label="Search"
                onClick={this.onSearching}
              >
                <AiOutlineSearch className="search-logo" />
              </button>
            </div>
            {this.renderViewBasedOnApiStatus()}
          </div>
        </div>
      </>
    )
  }
}

export default JobsRoute