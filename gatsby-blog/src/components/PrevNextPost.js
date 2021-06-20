import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import TagList from './TagList'
import { ReadingTime, Bull } from './Commons'

const PreviewContainer = styled.aside`
  display: flex;
  flex-wrap: wrap;
  max-width: 1080px;
  width: 80%;
  margin: 0px auto 30px auto;
  top: 20px;
  position: relative;

  @media (max-width: 780px) {
    width: 100%;
    padding: 25px;
  }
`

const Preview = styled.article`
  cursor: pointer;
  flex: 1 1 300px;
  background-color: #f7f7f7;
  box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);
  margin: 20px 20px;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 0 0, 0 6px 12px #383A40;
    transition: all 0.3s ease;
    transform: translate3D(0, -1px, 0);
  }

  @media (min-width: 780px) {
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const PreviewContent = styled.div`
  padding: 20px;

  header {
    padding: 0 0 10px 0;
  }
  section {
    padding-bottom: 10px;
  }
  footer {
    font-size: 0.8em;
  }
`

const PrevNextPost = props => {
  const { previous, next } = props
  const articles = [previous, next].filter(i => i).map(item => ({ node: item }))

  return (
    <Fragment>
      <PreviewContainer>
        {articles.map((article, i) => {
          const { excerpt, timeToRead } = article.node
          const {
            tags,
            title,
            slug,
          } = article.node.frontmatter

          return (
            <Preview key={`prev-next-${i}`}>
              <Link to={`/${slug}`} aria-label={`View ${title} article`}>
                <PreviewContent>
                  <header>
                    <h2>
                      {title}
                    </h2>
                  </header>
                  <section>
                    <p>{excerpt}</p>
                  </section>
                  <footer>
                    <ReadingTime min={timeToRead} />
                    {Array.isArray(tags) && (
                      <>
                        <Bull />
                        <TagList tags={tags} noLink={true} />
                      </>
                    )}
                  </footer>
                </PreviewContent>
              </Link>
            </Preview>
          )
        })}
      </PreviewContainer>
    </Fragment>
  )
}

export default PrevNextPost
