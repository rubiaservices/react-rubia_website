
import Logo1 from './img/img1.png'
import Logo2 from './img/img2.png'
import Logo3 from './img/img3.png'
import Logo4 from './img/img4.png'
import Logo5 from './img/img5.png'
import Logo6 from './img/img6.png'
import Logo7 from './img/img7.png'
import Logo8 from './img/img8.png'
import './services.css';

const Services = () => {

const imgObj={
    width: "387px",
    height: "257.83px",
}

const imgObj1={
    width: "387px",
    height: "257.83px",
    border:"1px solid black",
}

  return (
    <>
    <main className='w-100 mx-3 d-flex flex-column align-items-center justify-content-start gap-4'>
       
       {/* Section first Start Here */}
       <section  className='css_Card_Sec w-100 rounded '>
            <section className='text-start '>
                <h2  id="card-title">Book the Rental Drives</h2>
            </section>
            <section className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3'>
                <div>
                    <img className='css_img ' style={imgObj} src={Logo1} alt="" />
                   
                </div>
                <div className=' '>
                    <div className='d-flex flex-column justify-content-start align-items-start text-start '>
                        <p>
                            <span id='innerTitle'>Ride with the Best</span>
                            <br />
                            At Rubia Services, our drivers have over three years of experience, ensuring you receive top-quality service every time.
                        </p>
                       <div>
                       <span id='innerTitle'>Why Choose Us?</span>
                       <br />
                       <ul>
                        <li>Experienced Drivers: Over three years of professional driving.</li>
                        <li>Flexible Payments: Pay by the hour.</li>
                        <li>Safety and Reliability: Your safety is our priority.</li>
                        </ul>
                       </div>

                        <div>
                        <span id='innerTitle'> Our Services:</span>
                        <br />
                        <ul>
                        <li>Corporate Transportation</li>
                        <li>Airport Transfers</li>
                        <li>Special Events</li>
                        <li>Personal Chauffeur Services</li>
                        </ul>
                        </div>
                        <h6 className='css_bottom_heading6'>Book a driver today and experience the difference with RUBIA SERVICES!</h6>
                    </div>
                </div>
            </section>
       </section>
        {/* Section First end Here */}

       {/* Section Second start here */}

       <section  className='css_Card_Sec w-100 rounded'>
            <section className='text-start '>
                <h2  id="card-title">Discover the Most Convenient Way to Travel</h2>
            </section>
            <section className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3'>
                <div>
                    <img  className='css_img1 css_border' style={imgObj1} src={Logo2} alt="" />
                   
                </div>
                <div className=' '>
                    <div className='d-flex flex-column justify-content-start align-items-start text-start '>
                        <p>
                            <span id='innerTitle'>Welcome to Rubia -Your Ultimate Ride Partner!</span>
                            <br />
                            we offer a range of reliable and efficient transportation services to meet your needs.driver for a seamless and comfortable ride
experience.
                        </p>
                       <div>
                       <span id='innerTitle'>Why Choose Us?</span>
                       <br />
                       <ul>
                        <li>Versatility: Choose from car, auto, or bike taxis.</li>
                        <li>Safety: Regularly sanitized vehicles and vetted drivers.</li>
                        <li>User-Friendly App: Easy booking, tracking, and payments.</li>
                        <li>24/7 Availability: Rides available anytime.</li>
                        <li>Transparent Pricing: No hidden charges</li>
                        </ul>
                       </div>
                        <div>
                        <span id='innerTitle'> Our Services:</span>
                        <br />
                        <ul>
                        <li>Car Taxi: Comfortable and spacious for all travel needs.</li>
                        <li>Auto Taxi: Economical for short distances.</li>
                        <li>Bike Taxi: Fast for quick trips.</li>
                        <li>Personal Chauffeur Services</li>
                        </ul>
                        </div>
                        <h6 className='css_bottom_heading6'>Book a Taxi today and experience the difference with RUBIA SERVICES!</h6>
                    </div>
                </div>
            </section>
       </section>
    {/* Section Second End here */}


      {/* Section Third start here */}

      <section  className='css_Card_Sec w-100 rounded '>
            <section className='text-start '>
                <h2  id="card-title">Order Your Designs</h2>
            </section>
            <section className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3'>
                <div>
                    <img className='css_img' style={imgObj} src={Logo3} alt="" />
                </div>
                <div className=' '>
                    <div className='d-flex flex-column justify-content-start align-items-start text-start '>
                        <p>
                            <span id='innerTitle'> Elevate Your Brand with Professional Graphic Designs</span>
                            <br />
                            At Rubia services, we specialize in delivering high-quality graphic design solutions to elevate your business.
                        </p>
                       <div>
                       <span id='innerTitle'>Comprehensive Design Services Include:</span>
                       <br />
                       <ul>
                        <li>Business Cards </li>
                        <li>Brochures & Pamphlets</li>
                        <li>Magazines/Advertisements  </li>
                        <li>Flyers & Posters</li>
                        <li>Complete Graphic,Design Solutions</li>
                        </ul>
                       </div>
                        <div>
                        <span id='innerTitle'>Why Choose Us?:</span>
                        <br />
                        <ul>
                        <li>Expert Designers</li>
                        <li>High-Quality Work</li>
                        <li>Fast Delivery</li>
                        <li>Client-Focused</li>
                        </ul>
                        </div>
                        <h6 className='css_bottom_heading6'>Contact us today to elevate your brand with our designs!</h6>
                    </div>
                </div>
            </section>
       </section>
    {/* Section Third End here */}


     {/* Section Fourth start here */}

     <section  className='css_Card_Sec w-100 rounded '>
            <section className='text-start '>
                <h2  id="card-title">What do You Want Order Now</h2>
            </section>
            <section className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3'>
                <div>
                    <img className='css_img1' style={imgObj} src={Logo4} alt="" />
                </div>
                <div className=' '>
                    <div className='d-flex flex-column justify-content-start align-items-start text-start '>
                        <p>
                            <span id='innerTitle'>Innovative Mobile and Web Application Solutions</span>
                            <br />
                            we specialize in designing and developing mobile and web applications. Our goal is to provide you with innovative solutions that drive success and enhance user experiences.
                        </p>
                       <div>
                       <span id='innerTitle'>Our Services:</span>
                       <br />
                       <ul>
                        <li>Mobile Apps Design & Development </li>
                        <li>Mobile Application Design & Development</li>
                        <li>Web Application Design & Development</li>
                        </ul>
                       </div>
                        <div>
                        <span id='innerTitle'>Why Choose Us?</span>
                        <br />
                        <ul>
                        <li>Expert Designers</li>
                        <li>High-Quality Work</li>
                        <li>Fast Delivery</li>
                        <li>Client-Focused</li>
                        </ul>
                        </div>
                        <h6 className='css_bottom_heading6'>Contact today and let’s build something extraordinary together!</h6>
                    </div>
                </div>
            </section>
       </section>
    {/* Section Fourth End here */}

{/* Section Fifth start here */}

<section  className='css_Card_Sec w-100 rounded '>
            <section className='text-start '>
                <h2  id="card-title">Explore Your Business Now</h2>
            </section>
            <section className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3'>
                <div>
                    <img className='css_img' style={imgObj} src={Logo5} alt="" />
                </div>
                <div className=' '>
                    <div className='d-flex flex-column justify-content-start align-items-start text-start '>
                        <p>
                            <span id='innerTitle'>Boost Your Business with Expert Digital Marketing</span>
                            <br />
                            we provide comprehensive digital marketing services designed to elevate your brand and drive success.
                        </p>
                       <div>
                       <span id='innerTitle'>Our Services:</span>
                       <br />
                       <ul>
                        <li>SEO (Search Engine Optimization)</li>
                        <li>Social Media Marketing</li>
                        <li>Content Marketing</li>
                        <li>Email Marketing</li>
                        <li>PPC (Pay-Per-Click) Advertising</li>
                        </ul>
                       </div>
                        <div>
                        <span id='innerTitle'>Why Choose Us?</span>
                        <br />
                        <ul>
                        <li>Experienced Team</li>
                        <li>Customized Strategies</li>
                        <li>Proven Results</li>
                        <li>Client-Centric Approach</li>
                        </ul>
                        </div>
                        <h6 className='css_bottom_heading6'>Contact today and let’s take your business to the next level!</h6>
                    </div>
                </div>
            </section>
       </section>
    {/* Section Fifth End here */}

{/* Section Sixth start here */}

<section  className='css_Card_Sec w-100 rounded '>
            <section className='text-start '>
                <h2  id="card-title">Specialization in UX/UI Design</h2>
            </section>
            <section className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3'>
                <div>
                    <img className='css_img1' style={imgObj} src={Logo6} alt="" />
                </div>
                <div className=' '>
                    <div className='d-flex flex-column justify-content-start align-items-start text-start '>
                        <p>
                            <span id='innerTitle'>Transform Your User Experience with Expert UI/UX </span>
                            <br />
                            we specialize in creating intuitive and engaging UI/UX designs that enhance user satisfaction and drive business success.
                        </p>
                       <div>
                       <span id='innerTitle'>Our Services:</span>
                       <br />
                       <ul>
                        <li>User Interface (UI) Design</li>
                        <li>User Experience (UX) Design</li>
                        <li>Mobile App UI/UX Design</li>
                        <li>Web App UI/UX Design</li>
                        <li>Prototyping and Wireframing</li>
                        </ul>
                       </div>
                        <div>
                        <span id='innerTitle'>Why Choose Us?</span>
                        <br />
                        <ul>
                        <li>Expert Designers</li>
                        <li>Tailored Solutions</li>
                        <li>Enhanced User Experience</li>
                        <li>Collaborative Approach</li>
                        </ul>
                        </div>
                        <h6 className='css_bottom_heading6'>Contact today and let's create outstanding user experiences together!</h6>
                    </div>
                </div>
            </section>
       </section>
    {/* Section Sixth End here */}

{/* Section Seventh start here */}

<section  className='css_Card_Sec w-100 rounded '>
            <section className='text-start '>
                <h2  id="card-title">Connecting Talent with Opportunity</h2>
            </section>
            <section className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3'>
                <div>
                    <img className='css_img' style={imgObj} src={Logo7} alt="" />
                </div>
                <div className=' '>
                    <div className='d-flex flex-column justify-content-start align-items-start text-start '>
                        <p>
                            <span id='innerTitle'>Welcome to Rubia – Your Trusted Recruitment Partner!</span>
                            <br />
                            we provides top-notch manpower solutions, internship opportunities, and comprehensive training programs to ensure job readiness.
                        </p>
                       <div>
                       <span id='innerTitle'>Our Services:</span>
                       <br />
                       <ul>
                        <li>Manpower Recruitment: Pre-screened candidates, industry-specific solutions, permanent and temporary staffing.</li>
                        <li>Internship Programs: Valuable experience, skill development, career guidance.</li>
                        <li>Training and Development: Comprehensive training, corporate training, certification programs.</li>
                        </ul>
                       </div>
                        <div>
                        <span id='innerTitle'>Why Choose Us?</span>
                        <br />
                        <ul>
                        <li>Expertise: Experienced in recruitment and training.</li>
                        <li>Customized Solutions: Tailored recruitment and training.</li>
                        <li>Support: Continuous support throughout the process</li>
                        </ul>
                        </div>
                        <h6 className='css_bottom_heading6'> Contact today build your career</h6>
                    </div>
                </div>
            </section>
       </section>
    {/* Section Seventh End here */}


{/* Section Seventh start here */}

<section  className='css_Card_Sec w-100 rounded '>
            <section className='text-start '>
                <h2  id="card-title">Connecting Buyers, Sellers, Builders, and Contractors </h2>
            </section>
            <section className='w-100 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3'>
                <div>
                    <img className='css_img1 css_border' style={imgObj} src={Logo8} alt="" />
                </div>
                <div className=' '>
                    <div className='d-flex flex-column justify-content-start align-items-start text-start '>
                        <p>
                            <span id='innerTitle'>Welcome to Rubia – Your Premier Real Estate Hub!</span>
                            <br />
                            PrimeLand Realty simplifies real estate transactions by bringing land buyers, sellers, builders, and contractors together on one platform.
                        </p>
                       <div>
                       <span id='innerTitle'>Our Services:</span>
                       <br />
                       <ul>
                        <li>Land Buying and Selling: Extensive, verified listings,Secure transactions and expert guidance</li>
                        <li>Builder Services: Quality construction and custom solutions,End-to-end project management.</li>
                        <li>Construction Services: Network of skilled contractors.Detailed planning and budget management</li>
                        </ul>
                       </div>
                        <div>
                        <span id='innerTitle'>Why Choose Us?</span>
                        <br />
                        <ul>
                        <li>Comprehensive Listings: Wide range of verified properties.</li>
                        <li>Trusted Connections: Reputable builders & skilled contractors.</li>
                        <li>Integrated Platform: One-stop solution for all real estate needs.</li>
                        </ul>
                        </div>
                        <h6 className='css_bottom_heading6'>Contact today Go forward</h6>
                    </div>
                </div>
            </section>
       </section>
    {/* Section Seventh End here */}

    </main>
    </>
  )
}

export default Services