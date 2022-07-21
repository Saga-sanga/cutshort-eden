import React from "react";

export default function NameForm({onButtonClick, textContent, textChange}) {
  return (
    <React.Fragment>
      <h2 className="heading-text">{textContent.header}</h2>
      <span className="sub-text">{textContent.subText}</span>

      <form className="form-style">
        <label className="label-style" htmlFor="fullName">Full Name</label>
        <input
          className="text-input" 
          id="fullName"
          type="text"
          placeholder="Allan Thrall"
          required
        />
        <label className="label-style" htmlFor="dispName">Display Name</label>
        <input 
          className="text-input"
          id="dispName"
          type="text"
          placeholder="Allan"
          onChange={textChange}
          required
        />
        <button className="button-style" type="submit" onClick={onButtonClick}>Create Workspace</button>
      </form>
    </React.Fragment>
  )
}