import React from "react";

export default function Workspace({onButtonClick, textContent}) {
  return (
    <React.Fragment>
      <h2 className="heading-text">{textContent.header}</h2>
      <span className="sub-text">{textContent.subText}</span>

      <form className="form-style">
        <label className="label-style" htmlFor="workspaceName">Workspace Name</label>
        <input
          className="text-input" 
          id="workspaceName"
          type="text"
          placeholder="Eden"
          required
        />
        <label 
          className="label-style" 
          htmlFor="workspaceurl"
        >
          Workspace URL <span style={{color: '#c2c8d2'}}>(optional)</span>
        </label>
        <div className="workspace-div">
          <span className="span-url">www.eden.com/</span>
          <input 
            style={{borderRadius: '0 5px 5px 0', overflow: 'hidden'}}
            className="text-input"
            id="workspaceurl"
            type="text"
            placeholder="Example"
          />
        </div>
        <button className="button-style" type="submit" onClick={onButtonClick}>Create Workspace</button>
      </form>
    </React.Fragment>
  )
}