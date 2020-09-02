import React from 'react'
import { uniq } from 'lodash'
import { Link } from 'gatsby'
import styles from './article-preview.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

export default ({ posts }) => {
  const tags = posts.map(({ node }) => node.tags)
  const filteredTags = tags.filter((value, index) => tags.indexOf(value) === index)
  const concTags = [].concat(...filteredTags)
  const iconStyle = { paddingRight: 20, fontSize: 20 };

  return (
    <div
      style={{
        background: 'white',
        padding: 15,
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
      }}
    >
      <h2>Category <FontAwesomeIcon style={iconStyle} icon={faTags} /></h2>

      <div>
        {
          concTags && uniq(concTags).map(tag => (
            <div>
              <Link className={styles.tag} style={{ textDecoration: 'none' }} to={`/categorized-post/${tag}`}>{tag}</Link>
            </div>
          ))
        }
      </div>
  </div>
  )
}
