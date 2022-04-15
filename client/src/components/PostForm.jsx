import React, { useState } from 'react';
import Mybutton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const Postform = ({ create, ...props }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = function (e) {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    console.log(props.posts);
    setPost({ title: '', body: '' })
    // console.log(posts);
    // console.log(superRef.current.value);
    // setPosts([...posts, {
    //   id: posts.length + 1,
    //   title: document.getElementById('title').value,
    //   body: document.getElementById('body').value
    // }])
  }
  return (
    <form>
      {/*Управляемый компонент */}
      <MyInput
        type="text"
        placeholder="title"
        id="title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      {/*Неуправляемый\неконтроллируемый компонент (используется UseRef(закомментирован))*/}
      <MyInput
        type="text"
        placeholder="body"
        id="body"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      // ref={superRef}
      />
      <Mybutton onClick={addNewPost}> Запостить шнягу </Mybutton>
    </form>
  );
}

export default Postform;
