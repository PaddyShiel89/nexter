import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./colSidebar.module.scss"

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const openStyle = open ? {} : { display: "none" }
  const navId = "navigation"

  return (
    <div className={styles.sidebar}>
      <button
        onClick={() => setOpen(!open)}
        aria-controls={navId}
        aria-expanded={open}
        aria-label={`${open ? `Close` : `Open`} navigation menu`}
      >
        <div className={styles.navIcon}></div>
      </button>
      <div id={navId} className={styles.collapse} style={openStyle}>
        <nav>
          <ul>
            <li>
              <Link to="/#features">Why choose nexter?</Link>
            </li>
            <li>
              <Link to="/#story">Customer stories</Link>
            </li>
            <li>
              <Link to="/#houses">Properties</Link>
            </li>
            <li>
              <Link to="/#gallery">Property gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Sidebar
