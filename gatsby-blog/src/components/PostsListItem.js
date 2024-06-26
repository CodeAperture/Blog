import React from 'react'
import { Link } from 'gatsby'
import TagList from './TagList'
import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import { Bull, ReadingTime } from './Commons'

const Post = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
  padding-bottom: 1.25rem;
`

const ReadPost = styled(Link)`
  display: block;
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;
  color: #1C1D20;

  &:hover {
    background-color: #383A40;
    border-radius: 0.25rem;
    color: #ffffff;
  }
`

const PostHeader = styled.header`
  padding: 1em 0;
`

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
`

const PostTitleLink = styled(Link)`
  color: #3E4047;
  &:hover {
    border-bottom: 1px dotted #1C1D20;
  }
`

const FooterLine = styled.div`
  font-size: 0.8em;
`

const PostsListItem = props => {
  const { title, excerpt, slug, language, tags, timeToRead } = props
  const { defaultLang } = useSiteMetadata()

  return (
    <Post>
      <PostHeader>
        <h2>
          <PostTitleLink to={`/${slug}`}>
            {title}
          </PostTitleLink>
        </h2>
      </PostHeader>

      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </section>

      <footer>
        <FooterLine>
          <ReadingTime min={timeToRead} />
          <Bull />
          <TagList tags={tags} />
        </FooterLine>
        <ReadPost to={`/${slug}`} aria-label={`View ${title} article`}>
          Read post ›
        </ReadPost>
      </footer>
    </Post>
  )
}
export default PostsListItem
