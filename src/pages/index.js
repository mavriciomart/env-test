import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello there</h1>
    <p>I'm running in {process.env.GATSBY_WHERE_AM_I_RUNNING}</p>
  </Layout>
)

export default IndexPage
