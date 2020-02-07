import React from "react"
import styles from "./colFooter.module.scss"

const footer = () => (
  <footer className={styles.footer}>
    <nav>
      <ul>
        <li>
          <button>Find your dream home</button>
        </li>
        <li>
          <button>Request proposal</button>
        </li>
        <li>
          <button>Download home planner</button>
        </li>
        <li>
          <button>Contact us</button>
        </li>
        <li>
          <button>Submit your property</button>
        </li>
        <li>
          <button>Come work with us!</button>
        </li>
      </ul>
    </nav>
    <p>
      &copy; Copyright 2017 original design by Jonas Schmedtmann. Feel free to
      use this project for your own purposes. This does NOT apply if you plan to
      produce your own course or tutorials based on this project.
    </p>
    <p>
      Site built with design changes and conversions by Patrick Shiel, 2020.
    </p>

    <nav className={styles.personalLinks}>
      <ul>
      <li>
          <a href="https://github.com/PaddyShiel89/nexter">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/patrick-shiel-27944131/">LinkedIn</a>
        </li>
      </ul>
    </nav>

  </footer>
)

export default footer
