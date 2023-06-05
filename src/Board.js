import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from "./Tweet"
import "./Board.css"
import TweetForm from './TweetForm';
import { useEffect } from 'react';

function Board() {

    const posts = useSelector((state) => state.post.value).map(r => {
        return <Tweet info={r} />
    })

    //storeのpostの値を監視
    const nowPosts = useSelector((state) => state.post.value)
    useEffect(() => {
        // console.log(JSON.stringify(nowPosts))
        localStorage.setItem("posts", JSON.stringify(nowPosts));
    }, [nowPosts])

    return (
        <div className='tweet-board'>
            <h1>Redux Toolkit勉強</h1>
            <TweetForm />
            {posts}
        </div>
    )
}

export default Board