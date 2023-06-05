import React from 'react';
import "./Tweet.css";
import { deletePosts, } from './redux/postSlice';
import { useDispatch } from 'react-redux';

function Tweet(props) {
    const dispatch = useDispatch();

    return (
        <div className='card'>
            <div className='userArea'>
                <h4>{props.info.name}</h4>
                <i class="fa-solid fa-user"></i>
            </div>
            <div className='contentArea'>
                <p>{props.info.content}</p>
                <i class="fa-solid fa-trash" onClick={() => dispatch(deletePosts(props.info.id))}></i>
            </div>

        </div>
    )
}

export default Tweet;