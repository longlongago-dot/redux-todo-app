import React from 'react';
import { addPosts } from './redux/postSlice';
import textHook from './hooks/textHook';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

function TweetForm() {
    const dispatch = useDispatch();
    const [name, setName, resetName] = textHook("");
    const [content, setContent, resetContent] = textHook("");

    function submitHandler(e) {
        e.preventDefault();
        const obj = {
            id: uuidv4(),
            name: name,
            content: content
        }
        dispatch(addPosts(obj))
        resetName()
        resetContent()
    }


    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <label for="name">名前: </label>
            <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
            <label for="content">内容: </label>
            <input type='text' id="content" value={content} onChange={(e) => setContent(e.target.value)} />
            <button>追加する</button>
        </form>
    )

}

export default TweetForm