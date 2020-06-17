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
    <React.Fragment>
      <div style={{ maxWidth: 800, margin: '0 auto'}}>
        <FontAwesomeIcon style={iconStyle} icon={faTags} />
        {
          concTags && uniq(concTags).map(tag => (
            <p className={styles.tag} key={tag}>
              <Link style={{ textDecoration: 'none' }} to={`/categorized-post/${tag}`}>{tag}</Link>
            </p>
          ))
        }
      </div>
    </React.Fragment>
  )
}
