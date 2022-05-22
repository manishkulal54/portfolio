import React from 'react'

export default function ModeToggler(props) {
  return (<>
  <div className="mode">
          <div className="form-check form-switch form-positioner" >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Turn {props.mode === 'light' ? 'dark' : 'Light'} Mode</label>
          </div>
        </div>
  </>
  )
}
