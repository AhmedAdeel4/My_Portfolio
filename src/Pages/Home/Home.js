import React from 'react'
import './Home.css'
import photo1 from '../../Components/Photos/1.jpg'
import html from '../../Components/Photos/html.png'
import css from '../../Components/Photos/css-3.png'
import js from '../../Components/Photos/js.png'
import react from '../../Components/Photos/react.png'


export default function Home() {
  return (
    <div>
        <section>
            <div className='Hero'>
                <div className='Hero-Contant'>
                    <div className='Left'>
                        <span>Available for Freelance Work</span>
                        <h1 className='hi'>Hi, I'm  <span className='name'> Ahmed Adel</span></h1>
                        <h4 className='dev' >Front-end Developer</h4>
                        <p className='leftp'>
                            Passionate and detail-oriented frontend developer with a strong foundation in 
                            HTML, CSS, and JavaScript. Committed to creating responsive and user-friendly web 
                            applications. Eager to leverage my skills in a dynamic team environment. 
                        </p>
                        <div className='button'>
                            <button class="button-l b1 btn btn-primary">View My Work</button>
                            <button class="button-r b2 btn btn-outline-secondary">Contact Me</button>
                        </div>
                        <h6 className='work'>Tech I Work With :</h6>
                        <div className='tech'>
                            <span className='html'><img className='icon' src={html} alt='' />HTML</span>
                            <span className='css'><img className='icon' src={css} alt='' />CSS</span>
                            <span className='js'><img className='icon' src={js} alt='' />JS</span>
                            <span className='react'><img className='icon' src={react} alt='' />React</span>
                        </div>
                    </div>
                    <div className='Right'>
                        <img className='Image animate__animated animate__pulse' src={photo1} alt=''/>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className='secondDiv'>
                <h1 className='secondDiv-h'>About <span className='me'>Me</span></h1>
                <span className='secondDiv-span'>Get to know the person behind the code</span>
                <div className='shadow'>
                    <div className='about'>
                        <div className='left col-8'>
                            <div className='top-l'>
                                <h1 className='top-l-h'>Front-end Developer</h1>
                                <p className='top-l-p'>I'm <span className='aad'>Ahmed Adel</span>, a dedicated developer with 1+ year of experience creating exceptional digital solutions that blend aesthetics with functionality. My journey in development has equipped me with expertise across the entire stack, specializing in <span className='aad'>React</span> high-performance applications.
                                </p>
                            </div>
                            <div className='down-l'>
                                <h1 className='down-l-h'>Development Philosophy</h1>
                                <div className='down-l-div'>
                                    <p><span>✓</span> Clean, maintainable code as a foundation </p>
                                    <p><span>✓</span> Performance optimization from day one</p>
                                    <p><span>✓</span> Accessibility as a priority, not an afterthought</p>
                                </div>
                            </div>
                        </div>
                        <div className='right col-3 '>
                            <div className='top-r'>
                                <h1 className='top-r-h'>Personal Info</h1>
                                <div className='top-r-div'>
                                    <div>Name<p>Ahmed Adel</p></div>
                                    <div>Email<p>Ahmadadelcode@gmail.com</p></div>
                                    <div>Location<p>Cairo, Egypt</p></div>
                                    <div>Status<p>Open to opportunities</p></div>
                                </div>
                            </div>
                            <div className='down-r'>
                                <h1 className='down-r-h'>Current Focus</h1>
                                <p className='down-r-p'>
                                    Expanding expertise in cloud architectures and advanced React patterns
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
        
  )
}
