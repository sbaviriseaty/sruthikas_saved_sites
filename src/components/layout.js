import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <a href="https://tilearned.netlify.app/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h5 style={{ display: `inline` }}>Inspired by Kat Huang's tilearned</h5>
        </a>
      </header>
      {children}
    </div>
  )
}