import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from './css/Content.module.css';
import PostItem from './PostItem';

export class Content extends Component {
    constructor(props) {
      super(props)
    }
  render() {
    return (
        <div className={css.Content}>
            <div  className={css.TitleBar}>
                <h1>My post</h1>
            </div>
            <div>
                <PostItem savedPosts={savedPosts}/> 
            </div>
        </div>
    )
  }
}

export default Content