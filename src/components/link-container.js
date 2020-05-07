import React from "react"
import containerStyles from "./container.module.css"

export default function LinkContainer({ children }) {
    return <div className={containerStyles.link-container}>{children}</div>
  }