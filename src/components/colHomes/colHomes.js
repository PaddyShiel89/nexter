import React, { useState } from "react"
import styles from "./colHomes.module.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Homes = () => {
  const data = useStaticQuery(graphql`
    query HomesImages {
      allFile(
        filter: { relativeDirectory: { eq: "homes" } }
        sort: { fields: childImageSharp___fluid___originalName }
      ) {
        nodes {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const houseData = [
    {
      alt: "House 1",
      name: "Beautiful Family House",
      location: "USA",
      rooms: 5,
      area: 325,
      price: "1,200,000",
    },
    {
      alt: "House 2",
      name: "Modern Glass Villa",
      location: "Canada",
      rooms: 6,
      area: 455,
      price: "2,750,000",
    },
    {
      alt: "House 3",
      name: "Cozy Country House",
      location: "UK",
      rooms: 4,
      area: 250,
      price: "850,000",
    },
    {
      alt: "House 4",
      name: "Large Rustical Villa",
      location: "Portugal",
      rooms: 6,
      area: 480,
      price: "1,950,000",
    },
    {
      alt: "House 5",
      name: "Majestic Palace House",
      location: "Germany",
      rooms: 18,
      area: 4230,
      price: "9,500,000",
    },
    {
      alt: "House 6",
      name: "Modern Family Apartment",
      location: "Italy",
      rooms: 3,
      area: 180,
      price: "600,000",
    },
  ]

  for (let i = 0; i < houseData.length; i++) {
    houseData[i].key = data.allFile.nodes[i].childImageSharp.id
    houseData[i].imageFluid = data.allFile.nodes[i].childImageSharp.fluid
  }

  return (
    <section className={styles.homes} id={"houses"}>
      {houseData.map(house => (
        <Home house={house} key={house.key} />
      ))}
    </section>
  )
}

export default Homes

export const Home = ({house}) => {
  const [iconSelected, toggleIcon] = useState(false)
  const iconHelpText = `Click to ${iconSelected ? 'unfavourite' : 'favourite' } the property`

  return (
    <div className={styles.home}>
      <Img
        fluid={house.imageFluid}
        className={styles.homeImage}
        alt={house.alt}
      />
      <button title={iconHelpText} className={iconSelected ? `${styles.homeImageIcon} ${styles.homeImageIconSelected}` : styles.homeImageIcon} onClick={() => toggleIcon(iconSelected ? false : true)}>
        <svg>
          <use xlinkHref={`#sprite_icon-heart-full`} />
        </svg>
        <span>{iconHelpText}</span>
      </button>
      <h5>{house.name}</h5>
      <div className={`${styles.details} ${styles.detailsLocation}`}>
        <svg>
          <use xlinkHref={`#sprite_icon-map-pin`} />
        </svg>
        <p>{house.location}</p>
      </div>
      <div className={`${styles.details} ${styles.detailsRooms}`}>
        <svg>
          <use xlinkHref={`#sprite_icon-profile-male`} />
        </svg>
        <p>{house.rooms} rooms</p>
      </div>
      <div className={`${styles.details} ${styles.detailsArea}`}>
        <svg>
          <use xlinkHref={`#sprite_icon-expand`} />
        </svg>
        <p>
          {house.area}m<sup>2</sup>
        </p>
      </div>
      <div className={`${styles.details} ${styles.detailsPrice}`}>
        <svg>
          <use xlinkHref={`#sprite_icon-key`} />
        </svg>
        <p>${house.price}</p>
      </div>
      <button className={styles.contactButton}>Contact realtor</button>
    </div>
  )
}
