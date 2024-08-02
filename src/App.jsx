import { useState } from 'react'
import './App.scss'


function App() {


  return (
    <>
    <div className="container">
      <header>
        
          <div className="left">
            <img src="/public/images/Locus.svg" alt="" />
          </div>

          <div className="center">
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">Location</a>
            <a href="#">About Us</a>
          </div>

          <div className="right">
            <button>Sign Up</button>
          </div>
        
      </header>
    </div>
      <div className="container">
        <main>

          <section className='first'>
            <div className="left">
              <h2>
                  Get the inspiration <br />
                  of interior design <br />
                  here
              </h2>
              <p>
                architecture not only about engineering, it even <br /> 
                lands to art and aesthetics. With us, you will get <br />
                a residentical design with an extraordinary touch <br />
                of art.
              </p>

              <button>Let`s go</button>
            </div>

            <div className="right">
              <img className='background' src="/public/images/background.png" alt="background" />
              <img className='furniture' src="/public/images/furniture.png" alt="furniture" />
            </div>
          </section>

          <section className='how'>
            <div className="title">
              <h1>How it works</h1>
              <h2>Spice up your space even simpler <br />
              than you think</h2>
            </div>

            <div className="video">
              <div className="video-player">
                <img src="/public/images/vidio.png" alt="" />
              </div>
              <div className="set-video">
                <h3>
                    We provide design and build <br />
                    for commercial building, <br />
                    interior and furniture to improve <br />
                    the better life. 
                </h3>
                <a href="#">S E E  V I D E O</a>
              </div>
              <div className="video-play-btn">
                <div className="curcle">
                  <img src="/public/images/play.svg" alt="play btn" />
                </div>
                
              </div>
            </div>
          </section>
          
          <section className='mission'>
            <div className="left">
              <img src="/public/images/mission.svg" alt="photo" />
            </div>
            <div className="right">
              <h3>
              Our mission is to <br />
              deliver aesthetic visual <br />
              for your home 
              </h3>
              <p>By applying bacis psychology principles, <br />
                we are going to explain how perception <br />
                works and how we can use this understanding <br />
                to maximise the space that we occupy in <br />
                our homes.
              </p>
            </div>
          </section>

          <section className='projects'>
            <div className="top">
              <h1>Our project</h1>
              <h2>Introducing our first official project</h2>
              <div className="hr"></div>
              <div className="hr"></div>
            </div>
            <div className="info">
              <div className="left">
                <div className="text">
                                  <h3>Project Livingroom</h3>
                <p>A simple guide to create the perfect livingro- <br /> om for . Night Watc works beautifully in a wi- <br /> de gamut of arrangements.</p>
                </div>

                <img src="/public/images/livingRoom.png" alt="livingroom" />
              </div>
              <div className="center">
                <img src="/public/images/workspace.png" alt="" />
                <div className="text">
                  <h3>Project workspace</h3>
                  <p>A simple guide to create the perfect livingro- <br /> om for . Night Watc works beautifully in a wi- <br /> de gamut of arrangements.</p>
                </div>

              </div>
              <div className="right">
                <div className="text">
                  <h3>Library</h3>
                  <p>A simple guide to create the perfect livingro- <br /> om for . Night Watc works beautifully in a wi- <br /> de gamut of arrangements.</p>
                </div>
                
                <img src="/public/images/library.png" alt="library" />
              </div>
            </div>
          </section>

          <section className='test'>
            <h1>Testimonial</h1>
            <div className="top">
              <img src="/public/images/test1.png" alt="photo1" />
              <img src="/public/images/test2.png" alt="photo2" />
              <img src="/public/images/test3.png" alt="photo3" />
              <img src="/public/images/test4.png" alt="photo4" />
            </div>
            <div className="info">
            <div className="left">
              <img  src="/public/images/test.png" alt="test" />
            </div>
            <div className="right">
              <img className='bg' src="/public/images/“.svg" alt="'" />
              <div className="right-top">
                <div className="box">
                  <h3>105</h3>
                  <h4>project <br /> done</h4>
                  
                </div>
                <div className="box">
                  <h3>12</h3>
                  <h4>years of <br /> experience</h4>

                </div>
                <div className="box">
                  <h3>10+</h3>
                  <h4>big company <br /> partnership</h4>

                </div>
              </div>
              <div className="right-bottom">
                <p>"Not able to tell you how happy I am with interior design. <br /> Interior design has completely surpassed our expectations. <br /> Interior design saved my business. Interior design is worth <br /> much more than I paid."</p>
                <h5>- Roscoe</h5>
              </div>
            </div>
            </div>
            
          </section>

          <section className='contact'>
            <div className="left">
              <h1>Contact Us</h1>
              <p>Have any questions? Want help <br /> before getting started?</p>
              <div className="hr"></div>
              <div className="hr"></div>
            </div>
            <div className="right">
              <form >
                <input type="text" placeholder='Full name'/>
                <input type="text" placeholder='Email address'/>
                <input type="text" placeholder='Description'/>
                <div className="bottom">
                  <button>Send now</button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>

      
    </>
  )
}

export default App
