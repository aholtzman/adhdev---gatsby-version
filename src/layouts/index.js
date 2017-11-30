import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../GlobalThemes'
import Nav from '../components/Nav'

const Container = styled.div`
  width: 80vw;
  height: 80vh;
  margin: auto;
  display: flex;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`

const Display = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: lightgrey;
`

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="ADH - Front End Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Nav />
    <Display>
      {children()}
    </Display>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
