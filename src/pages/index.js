import React from "react"
import SEO from "../components/seo"

import "../scss/global.scss"
import MainContainer from "../containers/MainContainer/MainContainer"
import ColFeatures, { Feature } from "../components/colFeatures/colFeatures"
import ColFooter from "../components/colFooter/colFooter"
import ColGallery from "../components/colGallery/colGallery"
import ColHeader from "../components/colHeader/colHeader"
import ColHomes from "../components/colHomes/colHomes"
import ColRealtors from "../components/colRealtors/colRealtors"
import ColSidebar from "../components/colSidebar/colSidebar"
import ColStory from "../components/colStory/colStory"
import "../images/sprite.svg"

// import { useStaticQuery, graphql } from "gatsby"

const IndexPage = props => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <SEO title="Home" />
      <MainContainer>
        <ColSidebar>Sidebar</ColSidebar>
        <ColHeader>Header</ColHeader>
        <ColRealtors>Top 3 realtors</ColRealtors>
        <ColFeatures>
          <Feature heading="World's best luxury homes" icon="icon-global">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </Feature>
          <Feature heading="Only the best properties" icon="icon-trophy">
            <p>
              Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
              rerum sed a eligendi aut quia.
            </p>
          </Feature>
          <Feature heading="All homes in top locations" icon="icon-map-pin">
            <p>
              Tenetur distinctio necessitatibus pariatur voluptatibus quidem
              consequatur harum.
            </p>
          </Feature>
          <Feature heading="New home in one week" icon="icon-key">
            <p>
              Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </Feature>
          <Feature heading="Top 1% realtors" icon="icon-presentation">
            <p>
              Quidem consequatur harum, voluptatum mollitia quae. Tenetur
              distinctio necessitatibus pariatur voluptatibus.
            </p>
          </Feature>
          <Feature heading="Secure payments on nexter" icon="icon-lock">
            <p>
              Pariatur voluptatibus quidem consequatur harum, voluptatum
              mollitia quae.
            </p>
          </Feature>
        </ColFeatures>
        <ColStory type="pictures">Story pictures</ColStory>
        <ColStory type="content">Story content</ColStory>
        <ColHomes>Homes</ColHomes>
        <ColGallery>Gallery</ColGallery>
        <ColFooter>Footer</ColFooter>
      </MainContainer>
    </>
  )
}

export default IndexPage
