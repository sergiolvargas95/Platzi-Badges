import React from 'react';
import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render () {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return (
                        <li className="List" key={badge.id}>
                            <img src={badge.avatarUrl} alt="logo" />
                            <div className="List__container">
                                <p id="name">{badge.firstName} {badge.lastName}</p>
                            <div className="Twitter__container">
                                <div className="Twitter-logo"></div>
                                <p id="Twitter">@{badge.twitter}</p>
                            </div>
                            <p>{badge.email}</p>
                            <p>{badge.jobTitle}</p>
                        </div>
                    </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList;