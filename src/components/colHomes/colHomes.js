import React, { useState } from "react"
import styles from "./colHomes.module.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { houses, realtors } from '../../rawData'

import Modal from '../../containers/Modal/Modal'

const houseData = [...houses]
const realtorData = [...realtors]

const Homes = props => {
  const data = useStaticQuery(graphql`
    query HomesImages {
      houses: allFile(
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
      realtors: allFile(
        filter: { relativeDirectory: { eq: "realtors" } }
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

  for (let i = 0; i < houseData.length; i++) {
    houseData[i].key = data.houses.nodes[i].childImageSharp.id
    houseData[i].imageFluid = data.houses.nodes[i].childImageSharp.fluid
  }

  for (let i = 0; i < realtorData.length; i++) {
    realtorData[i].key = data.realtors.nodes[i].childImageSharp.id
    realtorData[i].imageFluid = data.realtors.nodes[i].childImageSharp.fluid
  }


  return (
    <section className={styles.homes} id={props.id}>
      {houseData.map(house => (
        <Home house={house} key={house.key} />
      ))}
    </section>
  )
}

export default Homes


export const Home = ({ house }) => {
  const [iconSelected, toggleIcon] = useState(false)
  const iconHelpText = `Click to ${
    iconSelected ? "unfavourite" : "favourite"
    } this property`

  const [modalOpen, toggleModal] = useState(false)

  const realtorNum = Math.floor(Math.random() *realtorData.length)

  return (
    <>
      <div className={styles.home}>
        <Img
          fluid={house.imageFluid}
          className={styles.homeImage}
          alt={house.alt}
        />
        <button
          aria-label={`${house.key}Helper`}
          className={
            iconSelected
              ? `${styles.homeImageIcon} ${styles.homeImageIconSelected}`
              : styles.homeImageIcon
          }
          onClick={() => toggleIcon(iconSelected ? false : true)}
          title={iconHelpText}
        >
          <svg>
            <use xlinkHref={`#sprite_icon-heart-full`} />
          </svg>
          <span id={`${house.key}Helper`}>{iconHelpText}</span>
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
        <button
          className={styles.contactButton}
          onClick={() => toggleModal(modalOpen ? false : true)}
        >Contact realtor</button>
      </div>
      <Modal
        modalOpen={modalOpen}
        toggleModalFunction={() => toggleModal(modalOpen ? false : true)}
      >
        <div className={styles.modal}>
          <Img
            fluid={house.imageFluid}
            alt={house.alt}
            className={styles.modalImage}
          />
          <h5>{house.name}</h5>
          <div className={styles.modalRealtorInfo}>
            <Img
              fluid={realtorData[realtorNum].imageFluid}
              alt={house.alt}
              className={styles.modalRealtorImage}
            />
            <p>Contact {realtorData[realtorNum].name} now for details</p>
          </div>
          <button
            className={styles.modalButtonEmail}
            onClick={() => toggleModal(modalOpen ? false : true)}
          >Email</button>
          <button
            className={styles.modalButtonCall}
            onClick={() => toggleModal(modalOpen ? false : true)}
          >Call</button>
        </div>
      </Modal>
    </>
  )
}