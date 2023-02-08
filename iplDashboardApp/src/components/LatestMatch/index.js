import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const updatedLatestMatchDetails = {
    id: latestMatchDetails.id,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,

    result,
    secondInnings,
    umpires,
    venue,
  } = updatedLatestMatchDetails
  //   console.log(updatedLatestMatchDetails)
  return (
    <div className="latest-match-card-container">
      <div className="latest-match-text-container-1">
        <p className="team-name-1">{competingTeam}</p>
        <p className="latest-match-date">{date}</p>
        <p className="last-match-venue">{venue}</p>
        <p className="last-match-result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-logo-img"
      />
      <div className="latest-match-text-container-1">
        <h1 className="second-text-heading">First Innings</h1>
        <p className="second-text-para">{firstInnings}</p>
        <h1 className="second-text-heading">Second Innings</h1>
        <p className="second-text-para">{secondInnings}</p>
        <h1 className="second-text-heading">Man Of The Match</h1>
        <p className="second-text-para">{manOfTheMatch}</p>
        <h1 className="second-text-heading">Umpires</h1>
        <p className="second-text-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
