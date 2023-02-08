import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-card-image" />

        <p className="team-card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
