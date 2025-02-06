import React from 'react';
import styles from './Stories.module.css';
import Heart from './Heart';
import ShareBtn from './ShareBtn';

const Stories = () => {
  return (
    <div>
      <h1 className={styles.hhh}>Simple Stories</h1>

<div className={styles.container}>
  <div className={styles.sp}>
      <div className={styles.stories}>
    <img src="./images/story1.png" alt="story" className={styles.imag} />
    <div className={styles.content}>
      <h3 className={styles.title}>What Makes Someone Truly Beautiful? This Story Will Change Your Perspective!</h3>
      <p className={styles.meta}>On Oct 05, 2024</p>
    </div>
    </div>
    <div className={styles.story}>
      <p className={styles.storystart}
      onClick={() => window.open("https://wisewordszone.blogspot.com/2024/10/what-makes-someone-truly-beautiful-this.html", "_blank")}
      >Her hands were dark, feet were covered in dirt, and there were stains on her face.
         I went to the village and saw that woman....</p>
          <button className={styles.minread}>&#8226; 2 min read</button> 
         <Heart/>
         <ShareBtn title="What Makes Someone Truly Beautiful? This Story Will Change Your Perspective!" 
         url="https://wisewordszone.blogspot.com/2024/10/what-makes-someone-truly-beautiful-this.html"/> 
    </div>
    </div> 

    <div className={styles.sp}>
    <div className={styles.stories}>
    <img src="./images/story2.png" alt="story" className={styles.imag} />
    <div className={styles.content}>
      <h3 className={styles.title}>Daniel and the Old Man: A Story That Will Make You Pause</h3>
      <p className={styles.meta}>On Jan 31, 2025</p>
    </div>
    </div>
    <div className={styles.story}>
      <p className={styles.storystart}
      onClick={()=>window.open("https://wisewordszone.blogspot.com/2025/01/daniel-and-old-man-story-that-will-make.html","_blank")}>
        16-year-old Daniel often saw an old man sitting on a bench whenever he went to the ground to play. 
        Daniel would always see him there and wonder....</p>
        <button className={styles.minread}>&#8226; 2 min read</button> 
         <Heart/>
         <ShareBtn title="Daniel and the Old Man: A Story That Will Make You Pause"
         url="https://wisewordszone.blogspot.com/2025/01/daniel-and-old-man-story-that-will-make.html"/>
    </div>
    </div>

    <div className={styles.sp}>
    <div className={styles.stories}>
    <img src="./images/story1.png" alt="story" className={styles.imag} />
    <div className={styles.content}>
      <h3 className={styles.title}>Ace Hotel</h3>
      <p className={styles.meta}>On May 16, 2022</p>
    </div>
    </div>
    <div className={styles.story}>
      <p className={styles.storystart}
      onClick={() => window.open("https://wisewordszone.blogspot.com/2024/10/what-makes-someone-truly-beautiful-this.html", "_blank")}
      >Her hands were dark, feet were covered in dirt, and there were stains on her face.
         I went to the village and saw that woman...</p>
         <button className={styles.minread}>&#8226; 2 min read</button> 
         <Heart/>
         <ShareBtn title="What Makes Someone Truly Beautiful? This Story Will Change Your Perspective!" 
         url="https://wisewordszone.blogspot.com/2024/10/what-makes-someone-truly-beautiful-this.html"/>
    </div>
    </div>
    </div> 
    </div> 
  )
}

export default Stories
