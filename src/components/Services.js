import React from 'react'
import '../StylingSheets/Services.css'

export default function Services(props) {

  const serviceStyle_preNext={
    height:'50px',
    width:'50px',
    color:'black'
  }

  const serviceStyle_bottom={
     backgroundColor:'black'
   }


  if(props.mode==='dark')
  {
    serviceStyle_preNext.color='white'
    serviceStyle_bottom.backgroundColor='white'
  }
  else{
    serviceStyle_preNext.color='black'
    serviceStyle_bottom.backgroundColor='black'
  }

  return (
    <>
      <div className="services-container" id='service'>
        <p> <h2>OUR SERVICES</h2></p>
        <div className="cardContainer">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" style={serviceStyle_bottom} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" style={serviceStyle_bottom} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" style={serviceStyle_bottom} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" style={serviceStyle_bottom} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" style={serviceStyle_bottom} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" style={serviceStyle_bottom} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item">
                <div className={`d-block card ${props.mode === 'dark' ? 'servDarkMode' : 'servLightMode'}`}>
                  <h4>Web development</h4>
                  <p>We will build your website and full fill all your needs.SEO optimization is included.</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className={`d-block card ${props.mode === 'dark' ? 'servDarkMode' : 'servLightMode'}`}>
                  <h4>Mobile Development</h4>
                  <p>We will build your mobile application and fullfill all your needs. SEO optimization is included.</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className={`d-block card ${props.mode === 'dark' ? 'servDarkMode' : 'servLightMode'}`} >
                  <h4>SEO & perhtmlhtmlFormance optimization</h4>
                  <p>We will optimize your existing website or mobile application in SEO and perhtmlhtmlFormance.</p>
                </div>
              </div>
              <div className="carousel-item active">
                <div className={`d-block card ${props.mode === 'dark' ? 'servDarkMode' : 'servLightMode'}`}>
                  <h4>Event Hosting</h4>
                  <p>We will take care of Event hosting and management process htmlhtmlFor your public.You just need to appear on the event as a host</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className={`d-block card ${props.mode === 'dark' ? 'servDarkMode' : 'servLightMode'}`}>
                  <h4>Consulting</h4>
                  <p>We offer free consultation about your idea and offer you best approach on how  to realize it.</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className={`d-block card ${props.mode === 'dark' ? 'servDarkMode' : 'servLightMode'}`}>
                  <h4>Digital marketing</h4>
                  <p>We will ensure that your idea  is well known in attempt to gather user base and expand your idea.</p>
                </div>
              </div>
            </div>
            <div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <svg xmlns="http://www.w3.org/2000/svg" className='pre-next-button bi bi-chevron-left' style={serviceStyle_preNext} width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <svg xmlns="http://www.w3.org/2000/svg" className='pre-next-button bi bi-chevron-right' style={serviceStyle_preNext} width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
