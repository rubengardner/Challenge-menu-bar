import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isLoaded: false,
        posts: []
      }
    }

  componentDidMount = () => {
    console.log('dataLoaded')
    this.dataLoaded()
    this.state.posts = savedPosts
  }

  dataLoaded(){
    setTimeout(()=>{
      console.log('Timeout running')
      this.setState(prevState =>{
        return{
        isLoaded: prevState.isLoaded === false ? true: false}
      })
    }, 500)
  }

  filterByAuthor = (event) => {
      const authorName = event.target.value.toLowerCase();
      const filteredPosts = savedPosts.filter(post => {
        return post.name.toLowerCase().includes(authorName)
    })
    this.setState({
      posts: filteredPosts
})
}



  render() {
    return (
        <div className={css.Content}>
            <div  className={css.TitleBar}>
                <h1>My post</h1>
                <form>
                  <label htmlFor='searchInput'>Search:</label>
                  <input onChange={(event) => this.filterByAuthor(event)} type='search' id='searchInput' name='search' placeholder='By author'></input>
                  <h4>Number of post: {this.state.posts.length} </h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {this.state.isLoaded ? (
                  <PostItem savedPosts={this.state.posts}/>
                ): 
                (
                <Loader />
                )}
            </div>
        </div>
    )
  }
}

export default Content