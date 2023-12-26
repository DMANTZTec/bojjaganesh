import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, teamImageUrl, name} = teamCardDetails
  return (
    <li className="team-card-item">
      <Link to={`/team-matches/${id}`} className="team-card">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
