import React from 'react';
import Mybutton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom'

const PostItem = (props) => {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <Mybutton onClick={() => router(`/posts/${props.post.id}`)}>Опен, пожалуйста</Mybutton>
        <Mybutton onClick={() => props.remove(props.post)}>Удалить ваще навсегда насовсем</Mybutton>
      </div>
    </div>
  );
}

export default PostItem;
