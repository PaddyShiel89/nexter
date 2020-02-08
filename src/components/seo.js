/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image, pathname }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
        defaultImage: file(relativePath: { eq: "header/hero.jpeg" }) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    `
  )

  const { site, defaultImage } = data

  const metaDescription = description || site.siteMetadata.description
  const metaImage = `${site.siteMetadata.url}${image ||
    defaultImage.childImageSharp.fluid.src}`
  const metaUrl = `${site.siteMetadata.url}${pathname || "/"}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title === `Home` ? site.siteMetadata.title : title}
      titleTemplate={
        title === `Home`
          ? site.siteMetadata.title
          : `%s | ${site.siteMetadata.title}`
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: metaImage,
        },
        {
          property: `og:title`,
          content: title === `Home` ? site.siteMetadata.title : title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title === `Home` ? site.siteMetadata.title : title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  pathname: PropTypes.string,
}

export default SEO
