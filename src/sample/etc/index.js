import React from 'react';
import * as images from '../assets/images';

import octocat from '../assets/images/octocat.png';
import githubLogo from '../assets/images/github_logo.png';

const IMAGES = process.env.PUBLIC_URL;

const SampleEtc = props => {
  return (
    <div>
      <h3>Font</h3>
      <p className="roboto">Almost before we knew it, we had left the ground.</p>
      <p>Almost before we knew it, we had left the ground.</p>

      <h3>Image</h3>
      <div>
        <img src={octocat} style={{ maxWidth: '200px', border: '1px solid black'}} alt="octocat" />
        <img src={githubLogo} style={{ maxWidth: '200px', border: '1px solid black' }} alt="githubLogo" />
      </div>

      <div>
        <img src={require('../assets/images/octocat.png')} style={{ maxWidth: '200px', border: '1px solid black' }} alt="octocat" />
        <img src={require('../assets/images/github_logo.png')} style={{ maxWidth: '200px', border: '1px solid black' }} alt="githubLogo" />
      </div>

      <div>
        <img src={images.octocat} style={{ maxWidth: '200px', border: '1px solid black' }} alt="octocat" />
        <img src={images.githubLogo} style={{ maxWidth: '200px', border: '1px solid black' }} alt="githubLogo" />
      </div>

      <div>
        <img src={`${IMAGES}/assets/images/octocat.png`} style={{ maxWidth: '200px', border: '1px solid black' }} alt="octocat" />
        <img src={`${IMAGES}/assets/images/github_logo.png`} style={{ maxWidth: '200px', border: '1px solid black' }} alt="githubLogo" />
      </div>
    </div>
  )
}

export default SampleEtc;