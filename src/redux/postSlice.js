import { createSlice } from "@reduxjs/toolkit";
import { postsData } from "../dummyData/dummyData";

//ローカルストレージにデータが残っているならそれを使う
let previewData = localStorage.getItem("posts");

export const postSlice = createSlice({
    name: "post",
    initialState: {
        value: JSON.parse(previewData) || postsData
    },
    reducers: {
        addPosts: (state, action) => {
            state.value.push(action.payload)
        },
        deletePosts: (state, action) => {
            state.value = state.value.filter((r) => r.id !== action.payload)
        }
    }


});

export const { addPosts, deletePosts } = postSlice.actions

export default postSlice.reducer;