import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import './App.css'; // import your css file

const App = () => (
  <Router>
    <div className="app">
      <Intro />
      <Description />
      <Skills />
      <Projects />
      <Contact />
    </div>

    <Routes>
      <Route path="skill" element={<SkillPage />} />
    </Routes>
  </Router>
);

const Intro = () => {
  const scrollToDescription = () => {
      document.getElementById('desc').scrollIntoView({behavior: "smooth"});
  }

  return (
      <>
        <div id="top" className="intro">
              <div className='picIntro'>
                  <img src="profile.png" alt="Your profile" />
              </div>
              <div className='textIntro'>
                  <p>Hi there, I'm Mark.</p>
                  <p>A dedicated Software Engineer and enthusiactic entrepreneur</p>
              </div>
          </div>
          <button className='intoButton' onClick={scrollToDescription}>Next Page</button>
      </>
  );
};

const Description = () => {
  const scrollToDescriptionD = () => {
    document.getElementById('skill').scrollIntoView({behavior: "smooth"});
}
  
  return (
    <>
  <section id="desc" className="description">
    
    <p>I'm a Software Engineer and an entrepreneur at heart from a beautiful country of Slovenia. 
    My expertise spans across various programming languages and graphic design tools, and my experiences, 
    particularly as an online store owner, demonstrate my acumen for problem-solving and innovation. 
    My journey underscores my commitment to turning challenges into opportunities, 
    driving growth and value with every project I undertake.</p>
    <button className='skillBtn' onClick={scrollToDescriptionD}>To Skills</button>
  </section>
  
  </>
);
  };

const Skills = () => {
  const scrollToDescriptionS = () => {
    document.getElementById('projects').scrollIntoView({behavior: "smooth"});
}

return(
  <>
  <section  className="skills">
    <h1 id="skill" className='skilsh1'>My Skills<p className='skillp'>*The bigger the circle, the more experience.</p></h1> 
    <div>
      <img className='imgexp' src="exp.png" alt="Your profile" />
    </div>
    <button className='proBtn' onClick={scrollToDescriptionS}>To Projects</button>
  </section>
  </>
);
};

const Projects = () => {

  const scrollToDescriptionC = () => {
    document.getElementById('contact').scrollIntoView({behavior: "smooth"});
}

return(
  <section id="projects" className="projects">
    <h2 className="projectsTitle">PROJECTS</h2>
    <p className='projectsdes'>*these are just some more relavent projects</p>
    <div className='project-container'>
      <div className='project'>
      <h2 className="projectsTitle1">SupTechStore</h2>
      <p className='projectDescription'>Small online store project that became a great "school" where i learned a lot of new skills and lessons for next projects and how to work on them.</p>
      <img className='suptechimg' src='suptechshow.png'/>
      <a href="https://www.suptechstore.com/">LINK TO THE SITE</a>
      </div>
      <div className='project'>
      <h2 className="projectsTitle1">TriPrice</h2>
      <p className='projectDescription'>A tool for calculating price of your trip build with React Native.<br/>*pending publication</p>
      <img className='tripriceimg' src='triprice.png'/>
      <a className='tripricelink' href="https://play.google.com/store/apps/details?id=com.mark_repac.triprice">LINK TO</a>
      </div>
      <div className='project'>
      <h2 className="projectsTitle1">SimplyWeather</h2>
      <p className='projectDescription'>A simple  React website for a quick 7 day wather forecast.</p>
      <img className='simplyimg' src='umbrella.png'/>
      <a className='simplylink' href="https://simplyweather-six.vercel.app/">LINK TO</a>
      </div>
      <div className='project'>
      <h2 className="projectsTitle1">AI Project Brewing</h2>
      <p className='projectDescription'>In this AI crazed time i decided to try working with AI so i can learn usfull skills for future of programming</p>
      <img className='brewimg' src='brew.png'/>
      </div>
    </div>
    <button className='ctnBtn' onClick={scrollToDescriptionC}>I Need A Contact!</button>
  </section>
);
};

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToDescriptionT = () => {
    document.getElementById('top').scrollIntoView({behavior: "smooth"});
  }

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name.trim()) {
      isValid = false;
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      isValid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = 'Email is not valid';
    }

    if (!formData.message.trim()) {
      isValid = false;
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return isValid;
  };





  return (
    <section id="contact" className="contact">
      <p>Contact</p>
      <div className='concontainer'>
      <div className='conform'>
      <form action="https://formspree.io/f/xjvdngkz" method="POST">
        <input type="text"  name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
        {formErrors.name && <span>{formErrors.name}</span>}
        
        <input type="email"  name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        {formErrors.email && <span>{formErrors.email}</span>}
  
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleInputChange} />
        {formErrors.message && <span>{formErrors.message}</span>}
  
        <input type="submit" value="Send" />
      </form>
      </div>
      <div className='conlinks'>
        <p className='linkTitleCon'>LinkedIn:</p>
        <p className='linkTitleCon'>e-Mail:</p>
        <p className='linkTitleCon'>Phone:</p>
        <p className='linkTitleCon'>CVs:</p>
      </div>
      <div className='conIcon'>
        <a className='iconLi' href ="https://www.linkedin.com/in/mark-repac"><img className='iconLi' src='linkedin.png'/></a>
        <p className='iconText'>repac.mark@gmail.com</p>
        <p className='iconText'>+386 31 304 004</p>
        <a className='iconPdf1' href ="Mark Repac ENG.pdf" attributes-list download ><img className='iconPdf1' src='pdf.png'/></a><a className='iconPdf2' href ="Resume Mark Repac.pdf" attributes-list download ><img className='iconPdf2' src='pdf.png'/></a>
        <img className='countryIcon1' src='slovenia.png'/>
        <img className='countryIcon2' src='uk.png'/>
      </div>
      </div>
      <button className='topBtn' onClick={scrollToDescriptionT}>To The Top</button>
    </section>
   );
};

const SkillPage = () => (
  <div>
    <h1>Skill Page</h1>
    <p>This is a placeholder page for the skill details.</p>
    <Link to="/">Back</Link>
  </div>
);

export default App;