// 动态飘特效
import React, { useState } from "react";
import '../styles/specialEffects.css';

const  FloatingText:React.FC = ()=> {
    const [isPaused, setIsPaused] = useState(false);
  
    const handleMouseEnter = () => {
      setIsPaused(true);
    };
  
    const handleMouseLeave = () => {
      setIsPaused(false);
    };
  
    const handleClick = () => {
      // 这里可以放置你的点击事件逻辑
      alert('You clicked the floating text!');
    };
  
    return (
        <div className="floating-container">
          <div
            className={`floating-text ${isPaused ? 'paused' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            Your Colorful Text Here
          </div>
        </div>
      );
  }
  
  export default FloatingText;