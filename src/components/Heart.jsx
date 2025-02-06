import React, {useState} from 'react';
import styles from './Heart.module.css';
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";

const Heart = () => {
    const [isFilled, setIsFilled] = useState(false);

    const toggleHeart=()=>{
        setIsFilled(!isFilled);
    };

  return (
    <div  className={styles.hrt} onClick={toggleHeart}>
        {isFilled ? <AiFillHeart color="red"/> : <AiOutlineHeart/>}
    </div>
  );
};

export default Heart;
