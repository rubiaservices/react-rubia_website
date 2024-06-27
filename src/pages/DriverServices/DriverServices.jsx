import React from 'react'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import DriverServiceTableCard from '../../components/DriverServiceTableCard/DriverServiceTableCard'
import DriverServiceProfile from '../../components/DriverServiceProfile/DriverServiceProfile';
const DriverServices = () => {


    const amtTableObj = {
        id:1,
        incity:{
            roadtrip:{
                bt:"2hrs",
                bf:260,
                em:"₹2 per min",
                nc:200,
                rc:"",

            },
            oneway:{
                bt:"2hrs",
                bf:300,
                em:"₹3 per min",
                nc:200,
                rc:"",

            },
        },
        outstation:{
            roadtrip:{
                bt:"4hrs",
                bf:900,
                em:"₹2 per min",
                nc:200,
                rc:"Food @ Accomodation",

            },
            oneway:{
                bt:"3hrs",
                bf:900,
                em:"₹3 per min",
                nc:200,
                rc:1000,

            },
        }
    }


  const detailsObj=  {
                    id:"1",
                    name:"test",
                    pn:6745656766,
                    dob:"05/05/2000",
                    dl:53656566765,
                    noye:5,
                    ei:""
                } 

   
  return (
   <>
   <main className='w-100 h-auto mx-3 px-2 d-flex flex-column align-items-center justify-content-start border border-2 border-black'>
    <header  className='w-100 h-auto mt-4 mb-3 d-flex flex-row justify-content-end align-items-center align-center justify-end'>
        <div className='p-3 d-flex flex-row align-items-center justify-content-center gap-3 shadow rounded-3'  
                style={{width: "430px",font:"19px",background: "#D7C3A4"}}> 
            <span style={{color: "#144273"}}>Driver Registration Form</span> 
            <button style={{width:"150px", height: "50px",background: "#144273" ,border:"0px", color:"#FFFFFF",padding:"12px" ,}} 
                    className='p-2 rounded text-center fw-bold rounded-3'>Click Here</button></div>
    </header>
    <section style={{textAlign: "justify"}} className='w-100 d-flex  flex-column '>
        <h1 style={{fontSize: "27",color:"#144273" }} className='fw-bold'>1. B2C&#x7B;Business to Customer&#x7D;</h1>
        <br />
        <br />
        <h2 className='fw-semibold mt-2 mb-2' style={{fontSize: "25px",color:"#144273"}}>a&#41; Hire-Temporary/Halting Drivers</h2>
        <p style={{fontSize: "16px", marginRight: "30px"}} >Explore Our Services & Book a Driver <br />
            Rubia  offers top-notch car driver services for all your needs. Whether it’s a daily commute, an airport
            transfer, or a special occasion, we have the right driver for you.</p>
        <div>
            <ol>
                <li>Download the RUBIA App</li>
                <ul style={{listStyle:"disc"}}>
                    <li>Available on the App Store and Google Play.</li>
                    <li><a href="#">Download for iOS</a> | <a href="#">Download for Android</a></li>
                </ul>
                <li>Sign Up & Book a Driver</li>
                <ul style={{listStyle:"disc"}}>
                    <li>Easy registration process.</li>
                    <li>Choose your ride, select your driver, and confirm your booking.</li>
                </ul>
                <li>Driver Payment by the Hour</li>
                <ul style={{listStyle:"disc"}}>
                    <li>Transparent hourly rates.</li>
                    <li>Pay only for the time you use.</li>
                </ul>
            </ol>
        </div>
    </section>

    <section className='w-100 d-flex justify-content-between align-items-center text-center'>
        <div className='d-flex justify-content-center align-items-center pt-2 text-start '>
            <p style={{font: "16px"}}>
            Download the App Now! <br />
            Experience the convenience and reliability of Ride.
            </p>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center '>
            <button style={{padding:"10px",width:"234px",height:"50px" ,background:"#144273" , color:"#FFF"}} className='rounded-3'>Download Rubia App</button>
        </div>
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center'>
        <DriverServiceTableCard amtTableObj={amtTableObj} />
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>b&#41; Hire-Permanent/montly Drivers</h2>
        <div className='w-100 d-flex justify-content-start align-item-center gap-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100 container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"50px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"scroll",overflowY:"hidden"}} className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"50px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

    <section style={{height:"295px", textAlign: "justify",background:"#FFF9F3", }} className='w-100 d-flex  flex-column p-2'>
        <h1 style={{font: "27",color:"#144273" }} className='fw-bold'>2. B2B&#x7B;Business to Business&#x7D;Driver</h1>
        <br /><br />
        <p style={{font: "16px", marginRight: "30px"}} >
        <b style={{color:"#144273"}}>Introduction:</b> Explain the services offered specifically for software companies, servicing centers, and used vehicle dealerships.</p>
        <div>
            <h5 style={{color:"#144273"}} className='fw-bold'>Detailed Services Sections:</h5>
            <ul style={{color:"#144273"}}>
                <li><b >For Software Companies:</b> <label style={{color:"#212529"}}>Emphasize driver reliability and scheduling flexibility.</label></li>
                <li><b >For Servicing Centers:</b> <label style={{color:"#212529"}}>Highlight customer satisfaction and prompt services.</label></li>
                <li><b >For Used Vehicle Dealerships:</b> <label style={{color:"#212529"}}>Focus on safe and timely vehicle transportation.</label></li>
            </ul>
        </div>
        <div className='w-100 d-flex flex-row justify-content-end align-item-center'>
            <button className='rounded-2 fw-bold' style={{height:"47px" ,border:"none" ,background: "#144273",color: "#FFF" ,padding:"10px 10px"}}>Contact us for more details</button>
        </div>
    </section>

    <section style={{height:"295px", textAlign: "justify",background:"#FFF9F3"}} className='w-100 d-flex  flex-column p-2'>
        <h1 style={{font: "27",color:"#144273" }} className='fw-bold'>3. Valet Parking Drivers</h1>
        <br /><br />
        <ul style={{listStyle:"none"}}>
            <li >-Pubs</li>
            <li>-Hospitals</li>
            <li>-Restaurant</li>
            <li>-Showrooms</li>
            <li>-Hotels</li>
            <li>-Functions/Party</li>
            <li>-Businesses</li>
        </ul>
        <div className='w-100 d-flex flex-row justify-content-end align-item-center'>
            <button className='rounded-2 fw-bold' style={{height:"47px" ,border:"none" ,background: "#144273",color: "#FFF" ,padding:"10px 10px"}}>Contact us for more details</button>
        </div>
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h1 style={{font: "27",color:"#144273",textAlign:"left" }} className='w-100 fw-bold'>4. Commercial Vehicle Divers</h1>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>a&#41; Bus drivers</h2>
        <div className='w-100 d-flex justify-content-start align-item-center gap-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100 container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"50px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"scroll",overflowY:"hidden"}} className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"50px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>b&#41; Lorry/Truck Drivers</h2>
        <div className='w-100 d-flex justify-content-start align-item-center gap-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100 container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"50px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"scroll",overflowY:"hidden"}} className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"50px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>
    

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>c&#41; JCB Drivers/Operators</h2>
        <div className='w-100 d-flex justify-content-start align-item-center gap-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100 container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"50px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"scroll",overflowY:"hidden"}} className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"50px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>


    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>d&#41; Crane Drivers/Operators</h2>
        <div className='w-100 d-flex justify-content-start align-item-center gap-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100 container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"50px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"scroll",overflowY:"hidden"}} className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"50px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>e&#41; Tractor Drivers</h2>
        <div className='w-100 d-flex justify-content-start align-item-center gap-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100 container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"50px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"scroll",overflowY:"hidden"}} className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"50px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>
    
    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>f&#41; Agriculture/Forming Machinery Drivers</h2>
        <div className='w-100 d-flex justify-content-start align-item-center gap-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100 container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"50px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"scroll",overflowY:"hidden"}} className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"50px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>g&#41; Ambulance Driver</h2>
        <div className='w-100 d-flex justify-content-start align-item-center gap-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100 container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"50px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"scroll",overflowY:"hidden"}} className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"50px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

    <section className='w-100 d-flex justify-content-center align-items-center flex-column gap-3'>
        <h2 className='w-100 fw-semibold' style={{fontSize:"25px",textAlign:"left",color:"#144273"}}>h&#41; Trailers Driver</h2>
        <div className='w-100 d-flex justify-content-start align-item-center gap-5'>
            <select className='fw-bold p-1' >
                <option>Select Your Country</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your State</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your City</option>
            </select>
            <select className='fw-bold p-1' >
                <option>Select Your Area</option>
            </select>
        </div> 

        <section style={{background:"#FFD0A0", margin: " 20px 0px"}} className='w-100 container rounded-4 '>
           <div style={{height: "400px" }} className='w-auto row '>
           
           <div style={{width:"50px",height: "400px", }} className='col-1 d-flex justify-content-center align-items-center flex-column ' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column '>
                <MdOutlineArrowBackIos color='#FFF' size="3em"/>
                </div>
           </div>
            <div style={{overflowX:"scroll",overflowY:"hidden"}} className='col-11 d-flex flex-row justify-content-start align-items-center  p-3 gap-4'>
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
                <DriverServiceProfile detailsObj={detailsObj} />
            </div>
            <div style={{width:"50px"}} className='col-1 d-flex justify-content-center  align-items-center flex-column' >
                <div style={{width:"50px", height:"90px", background:"#FFD0A0"}} className='d-flex justify-content-center shadow rounded-3  align-items-center flex-column'>
                <MdOutlineArrowForwardIos  color='#FFF' size="3em"/>
                </div>
            </div>
           </div>
        </section> 
    </section>

   </main>
   </>
  )
}

export default DriverServices