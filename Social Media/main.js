import {makePost} from '/post.js';
fetch('data.json')
.then(response=>response.json())
.then(data=>{
    console.log(data);
    console.log(data.posts);
    for (let i = 0; i < data.posts.length; i++) {
        makePost(data.posts[i]);
    }
})