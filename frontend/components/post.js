import React from 'react'
import Link from 'next/link'

import './post.css'

/*
    title: Indicates title of post
    author: indicates creator of post
    date : when the post is created
    details: content of the post (limit to 500 characters for preview)?
    categories: categories at which the post categorized as 

    Plan: Create a preview of the post that is clickable and displayed as a full website
*/

export const Post = ({
  // Default Values
  _id = 0,
  title = 'Title Missing',
  author = 'Author Missing',
  date = 'Date Missing',
  details = 'Details Missing',
  categories = ['#something1', 'Something2']
}) => {
  return (
    <div className="row post">
      <div className="col s12">
        <div className="card hoverable blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <blockquote className="subtitle">
              <p>{`By: ${author} on ${date}`}</p>
            </blockquote>

            <p>{details}</p>
          </div>
          <div className="tags">
            {categories.map((category, i) => {
              return (
                <div key={i} className="chip">
                  {category}
                </div>
              )
            })}
          </div>
          <div className="card-action">
            <Link href={`/post/[id]`} as={`/post/${_id}`}>
              <a>Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
