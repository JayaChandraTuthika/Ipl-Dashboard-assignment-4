import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const requiredMatchDetails = {
    teamLogo: matchDetails.competing_team_logo,
    team: matchDetails.competing_team,
    result: matchDetails.result,
    status: matchDetails.match_status,
  }
  console.log(requiredMatchDetails)

  const {team, teamLogo, result, status} = requiredMatchDetails

  return (
    <li className="match-card-container">
      <img
        src={teamLogo}
        alt={`competing team ${team}`}
        className="match-card-image"
      />
      <p className="team-name">{team}</p>
      <p className="match-result">{result}</p>
      <p className="match-status">{status}</p>
    </li>
  )
}

export default MatchCard
