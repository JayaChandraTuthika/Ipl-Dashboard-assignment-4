import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchdetails()
  }

  getTeamMatchdetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const backGroundColorClassNamesList = [
      'color-1',
      'color-2',
      'color-3',
      'color-4',
      'color-5',
    ]
    const selectedColor =
      backGroundColorClassNamesList[
        Math.floor(Math.random() * backGroundColorClassNamesList.length)
      ]
    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      teamBannerUrl: data.team_banner_url,
      recentMatches: data.recent_matches,
      color: selectedColor,
    }

    this.setState({teamMatchDetails: updatedData, isLoading: false})
  }

  render() {
    const {teamMatchDetails, isLoading} = this.state
    const {
      latestMatchDetails,
      teamBannerUrl,
      recentMatches,
      color,
    } = teamMatchDetails
    return (
      <div className={`team-matches-bg-container ${color}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ff1723" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner-image"
            />
            <p className="last-matches-text">Last Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-matches-list-container">
              {recentMatches.map(each => (
                <MatchCard matchDetails={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
