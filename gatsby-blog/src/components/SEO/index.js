import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import SchemaOrg from './schema-org'
import useSiteMetadata from '../../hooks/use-site-config'

const SEO = props => {
  const { isBlogPost, path = '', lang = 'en', datePublished } = props
  const {
    siteTitle,
    siteUrl,
    siteDescription,
    twitterUsername,
    authorName,
  } = useSiteMetadata()

  const title = props.title
    ? `${props.title} | ${siteTitle}`
    : `${siteTitle} - ${siteDescription}`
  const formatedSiteUrl = siteUrl.endsWith('/')
    ? siteUrl.substring(0, siteUrl.length - 1)
    : siteUrl
  const imagePath = props.imageShare || props.cover
  const image = `${formatedSiteUrl}${imagePath}`
  const description = props.description || siteDescription
  const url = formatedSiteUrl + withPrefix(path)

  return (
    <>
      <Helmet title={title}>
        {/* General tags */}
        <html lang={lang} />
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={url}
        author={authorName}
        organization={siteTitle}
        defaultTitle={title}
      />
    </>
  )
}

export default SEO
