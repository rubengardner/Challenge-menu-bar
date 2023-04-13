import React, { useState, useEffect } from 'react';
import {savedPosts} from "../posts.json";
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {
 
    const[isLoaded, setIsLoaded] = useState(false);
    const[fetchedPosts, setFetchedPosts] = useState([]);

     useEffect(() => {
        setTimeout(()=>{
            setIsLoaded(true);
            setFetchedPosts(savedPosts)
        },500)
    }, []);


  
    const filterByAuthor = (event) => {
      const authorName = event.target.value.toLowerCase();
      const filteredPosts = savedPosts.filter(post => {
        return post.name.toLowerCase().includes(authorName)
    })
       setFetchedPosts(filteredPosts);
    }   
    return (
        <div className={css.Content}>
            <div  className={css.TitleBar}>
                <h1>My post</h1>
                <form>
                  <label htmlFor='searchInput'>Search:</label>
                  <input onChange={(event) => {filterByAuthor(event)}} type='search' id='searchInput' name='search' placeholder='By author'></input>
                  <h4>Number of post: {fetchedPosts.length} </h4>
                </form>
            </div>
            <div className={css.SearchResults}>
                {isLoaded ? (
                  <PostItem savedPosts={fetchedPosts}/>
                ): 
                (
                <Loader />
                )}
            </div>
        </div>
    )
  }


export default ContentHooks