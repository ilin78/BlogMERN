import React from 'react';
import { PostItem } from '../';

import './PostsList.scss'

const PostsList = ({ posts }) => {
  return (
    <div className="posts-list">
      {
        posts.map( post => (
          <PostItem {...post} />
          ))
      }

    </div>
  )
}

export default PostsList;