import React from 'react'
import { uniq } from 'lodash'
import { Link } from 'gatsby'

export default ({ posts }) => {
  const tags = posts.map(({ node }) => node.tags)
  const filteredTags = tags.filter((value, index) => tags.indexOf(value) === index)
  const concTags = [].concat(...filteredTags)

  return (
    <React.Fragment>
      <h1>This is category</h1>
      {
        concTags && uniq(concTags).map(categoryTag => (
          <li key={categoryTag}>
            <Link to={`/category/${categoryTag}`}>{categoryTag}</Link>
          </li>
        ))
      }
    </React.Fragment>
  )
}
