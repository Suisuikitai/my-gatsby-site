import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull on a couch and looking stoically at the camera"
        src="../images/海月.jpg"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage