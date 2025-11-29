# Insta-Style Reels Effect

A front-end micro project that recreates the feel of Instagram Reels — auto-playing videos, like and follow toggles. This project strengthened my skills in DOM manipulation, event delegation, and state-driven UI rendering using pure JavaScript.

---

## Demo Preview
(Add a screenshot or GIF here once deployed)

---

## What I Learned
- Rendering UI dynamically using a JavaScript array of objects  
- Implementing like/unlike and follow/unfollow logic  
- Component-style layout with HTML & CSS  
- Managing UI state without frameworks  

---

## Tech Stack
- HTML5  
- CSS3  
- Vanilla JavaScript (ES6+)  
- Remix Icons  
- Pexels Videos 

---

## Features
- Auto-playing looping videos  
- Like / Unlike  
- Follow / Unfollow   
- Comment & Share counters (static UI)  
- Dynamic usernames, captions, and profiles  
- Full re-render using a single addData() function  

---

## How It Works
- All reels are stored inside a JavaScript array called reels[]  
- Each user action updates the corresponding reel’s state  
- The UI re-renders cleanly using addData()  
- Event delegation handles all actions from one place