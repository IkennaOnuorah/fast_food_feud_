import { findByLabelText } from "@testing-library/react"
import * as React from "react"
import "./Chip.css"


export function Chip({ label = "", isActiv = false, clicked =()=> {}}) {
  

  return (
    <button className="chip">
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
