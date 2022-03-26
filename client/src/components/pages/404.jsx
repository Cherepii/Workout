import React from 'react'
import Layout from '../common/layout/Layout'
import authBg from "../../images/bg-auth.png"


const NotFound = () => {
  return (
    <Layout bgImage={authBg} heading='404 - Page not found...'></Layout>
  )
}

export default NotFound