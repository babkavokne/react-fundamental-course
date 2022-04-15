import React from 'react';
import style from './MyButton.module.css';

const Mybutton = ({children, ...props}) => {
  return (
    <button {...props} className={style.myBtn}>
      {children}
    </button>
  );
}

export default Mybutton;
