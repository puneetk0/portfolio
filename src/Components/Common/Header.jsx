import React from 'react'
import './Header.css'
import { useState } from 'react';

const Header = () => {
    const [click, setClick] = useState(false);
    function onClickEvent(){
      const body = document.getElementById("notheader-container");
      body.style.display = 'none';
    }
    
    function onDoubleClick(){
      const body = document.getElementById("notheader-container");
      body.style.display = 'block';
    }
  return (
      <header>
    <div className='header-container'>
        <div className='logo'>
            <img src = "https://t4.ftcdn.net/jpg/03/09/08/53/360_F_309085340_K9BCrpVsCqRsQljCG3T1ZZEWb18LyXP8.jpg"></img>
            <div className='logo-name'>
                <h2>Puneet <br/> Kathuria</h2>
            </div>
        </div>
        <div className={click ? "mobile-nav" : "links"} onClick={() => setClick(false)}>
           <a href='/'>Home</a>
          <a href='/about'>About</a>  
            <a href='/portfolio'>Portfolio</a>
            <a href='https://www.youtube.com/c/LearnGroww/'>Youtube</a>
        </div>
        <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i onClick={onDoubleClick} className='fa fa-times' > </i> : <i onClick={onClickEvent} className='fa fa-bars' ></i>}
          </button>
    </div>
    </header>
  )
}

export default Header;
