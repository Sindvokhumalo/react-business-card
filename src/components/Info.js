import React from 'react'
import mailLogo from "../images/gmail.jpg"
import linkedinLogo from "../images/link.png"

export default function Info() {
  return (
    <div className="main--container">

    <h3 className="main--heading main--content">
            Khumalo Sindvo
    </h3>
    <h4 className="main--h4--one main--content">
        Frontend Developer
    </h4>


        <div className="btn--class">
    <button className="main--btn btn--email">
    
    <a href="mailto:khumalosindvo@gmail.com"><img src={mailLogo} width="100%"  height="22px"  className="email" /></a>
    </button>
    <button className="main--btn btn--linkedin">
     <a href="https://www.linkedin.com/in/mthokozisi-khumalo"><img src={linkedinLogo} width="100%" height="22px" className="linkedin" /></a>  
    </button>
    </div>
    
    <div className="main--about--interest">
    <h3>About Me</h3>
    <p>I am a frontend developer with a particular interest
     in making things simple and automating daily tasks. 
     I try to keep up with security and best practices,
      and am always looking for new things to learn.</p>
    <h3>Interests</h3>
    <p>Football. Running. Reader. Internet fanatic.
     Entrepreneur. Travel geek. Pop culture ninja. 
     </p>
    </div>

    </div>
  )
}
