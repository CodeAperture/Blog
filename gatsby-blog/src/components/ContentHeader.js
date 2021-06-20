import React, { Fragment } from 'react'
import styled from 'styled-components'
import TagList from './TagList'
import Time from './Time'
import { Bull } from './Commons'

const Header = styled.header`
  margin-bottom: 1rem;
  color: #546c77;
  font-size: 0.9em;
`

class ContentIntro extends React.Component {
  render() {
    const { date, tags } = this.props

    return (
      <Header>
        {date && <Time date={date} />}
        {date && Array.isArray(tags) && tags.length > 0 && <Bull />}
        {Array.isArray(tags) && tags.length > 0 && (
          <Fragment>
            <TagList tags={tags} />
          </Fragment>
        )}
      </Header>
    )
  }
}

export default ContentIntro
