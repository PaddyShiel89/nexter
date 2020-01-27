import React, { Fragment } from "react"
import styles from "./colRealtors.module.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { realtors } from '../../rawData'

const Realtors = () => {
  const data = useStaticQuery(graphql`
    query RealtorImages {
      allFile(
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

  const realtorData = [...realtors]

  for (let i = 0; i < realtorData.length; i++) {
    realtorData[i].key = data.allFile.nodes[i].childImageSharp.id
    realtorData[i].imageFluid = data.allFile.nodes[i].childImageSharp.fluid
  }

  return (
    <div className={styles.realtors}>
      <h3>Top 3 Realtors</h3>
      <div className={styles.realtorsList}>
        {realtorData.map(realtor => (
          <Fragment key={realtor.key}>
            <Img
              className={styles.realtorsImage}
              fluid={realtor.imageFluid}
              alt={`Realtor ${realtor.name}`}
            />
            <div className={styles.realtorsDetails}>
              <h4>{realtor.name}</h4>
              <p>{realtor.sales} houses sold</p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
export default Realtors
