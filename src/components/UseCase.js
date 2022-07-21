import Single from '../images/Single.png';
import Team from '../images/Team.png';
import React from 'react';

export default function UseCase({onButtonClick, textContent, focusElement}) {
  return (
    <React.Fragment>
      <h2 className="heading-text">{textContent.header}</h2>
      <span className="sub-text">{textContent.subText}</span>

      <form className="form-style">
        <div className="use-case-container">
          <div className="use-case-div" onClick={focusElement}>
            <img src={Single} alt="Single logo" />
            <h3>For myself</h3>
            <span>Write Better. Think more clearly. Stay organised.</span>
          </div>
          <div className="use-case-div" onClick={focusElement}>
          <img src={Team} alt="Team logo" />
            <h3>With my team</h3>
            <span>Wikis, docs, tasks & projects, all in one place.</span>
          </div>
        </div>
        <button className="button-style" type="submit" onClick={onButtonClick}>Create Workspace</button>
      </form>
    </React.Fragment>
  )
}