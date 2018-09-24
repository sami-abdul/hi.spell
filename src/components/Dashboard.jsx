import React, { Component } from 'react';
import { isSignInPending } from 'blockstack';

import { 
  avatarFallbackImage,
  profile,
  updateProfile 
} from '../modules/ProfileManager'

export default class Dashboard extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  profile: profile
  	};
  }

  render() {
    const { handleSignOut } = this.props;
    const { profile } = this.state;
    return (
      !isSignInPending() ?
      <div className="panel-welcome" id="section-2">
        <div className="avatar-section">
          <img src={ profile.avatarUrl() ? profile.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" />
        </div>
        <h1>Hello, <span id="heading-name">{ profile.name() ? profile.name() : 'Nameless Person' }</span>!</h1>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signout-button"
            onClick={ handleSignOut.bind(this) }
          >
            Logout
          </button>
        </p>
      </div> : null
    );
  }

  componentWillMount() {
    this.setState({
      profile: updateProfile()
    });
  }
}